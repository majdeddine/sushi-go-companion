import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from 'models'
import { LaMailer } from 'mailer'

const { SMTP, EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_PORT, APP_NAME } = process.env

const UserResolver = {
  allUsers: async () => {
    const users = await User.find()
    return users
  },
  me: async _id => {
    const user = await User.findById(_id)
    return user
  },
  findUserById: async ({ _id }) => {
    const user = await User.findById(_id)
    return user
  },
  register: async ({ password, forename, surname, email, username, avatar }) => {
    const hash = await bcrypt.hash(password, 12)
    const newUser = new User({
      forename,
      surname,
      email,
      username,
      password: hash,
      avatar,
      createdAt: new Date(),
    })
    const result = await newUser.save()
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24,
    })
    const mailOptions = {
      app: {
        appName: APP_NAME,
      },
      email: {
        smtp: SMTP,
        port: EMAIL_PORT,
        username: EMAIL_ADDRESS,
        password: EMAIL_PASSWORD,
        address: EMAIL_ADDRESS,
        replyTo: EMAIL_ADDRESS,
        isTls: true,
      },
    }
    const mailer = new LaMailer(mailOptions)
    mailer.SendRegistrationEmail({
      forename: result.forename,
      email: result.email,
      username: result.username,
    })
    return token
  },
  login: async ({ username, password }) => {
    const user = await User.findOne({ username })
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      const { _id } = user
      const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      })
      return token
    }
    return new Error('Invalid credential!')
  },

  updateUser: async args => {
    const { _id } = args
    delete args._id
    args.updatedAt = new Date()
    const updatedUser = await User.findByIdAndUpdate(_id, args, { new: true })
    return updatedUser
  },
}
export { UserResolver }

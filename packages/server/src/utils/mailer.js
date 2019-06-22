import nodemailer from 'nodemailer'

class LaMailer {
  constructor(config) {
    this.config = config
    this.init()
  }

  init = () => {
    const {
      email: { smtp, port, username, password, address, replyTo, isTls },
    } = this.config

    this.transporter = nodemailer.createTransport({
      host: smtp,
      port,
      secure: isTls,
      auth: {
        user: username,
        pass: password,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    })
    this.mailOptions = {
      from: address,
      replyTo,
    }
  }

  printResult = (err, res) => {
    if (err) {
      console.error('there was an error: ', err)
    } else {
      console.log('here is the res: ', res)
    }
  }

  sendTestEmail = () => {
    const {
      app: { appName },
    } = this.config

    const options = {
      ...this.mailOptions,
      to: 'arsamsarabi@me.com',
      subject: `Email From ${appName}`,
      text: 'Hello World!',
    }
    this.transporter.sendMail(options, (err, res) => {
      this.printResult(err, res)
    })
  }

  SendRegistrationEmail = ({ forename, email, username }) => {
    const {
      mailOptions,
      config: {
        app: { appName },
      },
    } = this
    const options = {
      ...mailOptions,
      to: email,
      subject: `Email From ${appName}`,
      text: `
        Hi ${forename}, Welcome to ${appName}

        Your account with username: "${username}" has been successfully created.
        
        Hope you enjoy ${appName}!

        --------------------------------
        Please email developer@arsamsarabi.co.uk with all your comments and suggestions.
      `,
    }
    this.transporter.sendMail(options, (err, res) => {
      this.printResult(err, res)
    })
  }
}

export { LaMailer }

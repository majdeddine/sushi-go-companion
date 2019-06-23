import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import path from 'path'
import chalk from 'chalk'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { Schema } from 'schemas'
import { Resolvers } from 'resolvers'

const PORT = process.env.PORT || 4100
const app = express()
const databaseUrl = 'mongodb://mongo:27017/sushigo'

const { ObjectId } = mongoose.Types
// eslint-disable-next-line func-names
ObjectId.prototype.valueOf = function() {
  return this.toString()
}

mongoose.set('useCreateIndex', true)
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
})
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => {
  console.log(chalk.bgCyanBright.black('👾  db connected 👾  '))
})

app.use(bodyParser.json())
app.use(cookieParser())
app.get('/', (req, res) => {
  return res.sendStatus(404)
})
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(
  '/gql',
  graphqlHTTP({
    schema: Schema,
    rootValue: Resolvers,
    graphiql: process.env.NODE_ENV === 'development',
    formatError(err) {
      if (!err.originalError) {
        return err
      }
      const { data } = err.originalError
      const message = err.message || 'An error occurred.'
      const code = err.originalError.code || 500
      console.log({ data, message, status: code })
      return { message, status: code, data }
    },
  }),
)
app.listen(PORT, () =>
  console.log(chalk.bgGreenBright.black(`✨  Magic happens on port ${PORT} ✨  `)),
)

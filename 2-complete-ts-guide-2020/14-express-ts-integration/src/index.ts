import express, { Request, Response } from 'express'
import {urlencoded } from 'body-parser'
import {router} from './routes/loginRouter'
import cookieSession from 'cookie-session'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(cookieSession({keys: ['laskdjf']}))
app.use(router)

app.listen(5088, () => {
  console.log('Listening on port 5088')
})
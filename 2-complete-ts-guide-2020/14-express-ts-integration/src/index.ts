import express, { Request, Response } from 'express'
import {urlencoded } from 'body-parser'
import cookieSession from 'cookie-session'
import {AppRouter} from './AppRoutes'
import './controllers/LoginController'
import './controllers/RootControllers'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(cookieSession({keys: ['laskdjf']}))
app.use(AppRouter.getInstance());

app.listen(5088, () => {
  console.log('Listening on port 5088')
})


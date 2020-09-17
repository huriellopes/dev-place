import 'dotenv/config'
import 'reflect-metadata'
import cors from 'cors'
import express, { Errback, NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import AppError from '@api/errors/AppError'
import { errors } from 'celebrate'
import '../database'

import router from '../routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use(errors())

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Page Not Found' })
})

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    })
  }

  if (process.env.APP_DEBUG === 'true') {
    return res.status(500).json({ message: err.message })
  } else {
    return res.status(500).json({ message: 'Internal Error' })
  }
})

export default app

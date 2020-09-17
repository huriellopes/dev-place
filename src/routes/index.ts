import { Router, Response } from 'express'

const router = Router()

router.get('/healthcheck', (_, res: Response) => {
  res.json({ message: 'Server is working! Go Coding!' })
})

export default router

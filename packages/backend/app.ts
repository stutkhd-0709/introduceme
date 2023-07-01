import express from 'express'
import logMiddleware from './middlewares/logger'

const app = express()
app.use(express.json())
app.use(logMiddleware)

// task
app.get('/api/tasks', async (req: express.Request, res: express.Response) => {
  res.status(200).json([
    {
      name: 'task1'
    },
    {
      name: 'task2'
    },
    {
      name: 'task3'
    }
  ])
})

app.get('/api/tasks/:id', async (req: express.Request, res: express.Response) => {
  res.status(200).json({
    name: 'task1'
  })
})

app.post('/api/tasks/:id', async (req: express.Request, res: express.Response) => {
  res.status(200).json({name: 'success'})
})

app.put('/api/tasks/:id', async (req: express.Request, res: express.Response) => {
  res.status(200).json({
    'name': req.body.name
  })
})

app.delete('/api/tasks/:id', async (req: express.Request, res: express.Response) => {
  res.status(200)
})

export default app
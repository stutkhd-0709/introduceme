import express from 'express'

const app = express()

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

app.post('/api/tasks', async (req: express.Request, res: express.Response) => {
  res.status(200)
})

app.put('/api/tasks/:id', async (req: express.Request, res: express.Response) => {
  res.status(200).json({
    'name': req.body.name
  })
})

app.delete('/api/tasks/:id', async (req: express.Request, res: express.Response) => {
  res.status(200)
})


app.listen(4000, () => {
  console.log('server running on port 4000')
})
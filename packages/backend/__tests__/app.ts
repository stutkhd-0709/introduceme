import request from 'supertest'

import app from '../app'

describe('POST /api/tasks/:id', () => {
  it('responds with message', async() => {
    const response = await request(app).post('/api/tasks/1').send({
      sample: 1
    })
    expect(response.status).toBe(300)
  })
})
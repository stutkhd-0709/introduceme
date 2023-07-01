import express from 'express'

const logMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(Date.now(), req.method, req.url)
  next();
}

export default logMiddleware
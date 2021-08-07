import type { NextApiRequest, NextApiResponse } from 'next'
import { handler } from '../../src/infra/handler'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default (req: NextApiRequest, res: NextApiResponse) => handler(req, res)

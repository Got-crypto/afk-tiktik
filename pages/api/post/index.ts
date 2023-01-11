// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { allPostsQuery } from '../../../utils/queries'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if( req.method === 'GET' ) {
        const query = allPostsQuery()

        try {
            const data = await client.fetch(query)
            res.status(200).json(data)
        } catch (error) {
            console.log('error', error)
        }

    } else if( req.method === 'POST' ) {
        const document = req.body

        try {
          await client.create(document)

          res.status(201 ).json('Video Created')
        } catch (error) {
          console.log('error creating post', error)
        }
    }
}

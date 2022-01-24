import type { NextApiRequest, NextApiResponse } from 'next'
import type { ContactFields } from '../../types'

import FormData from 'form-data'
import Mailgun from 'mailgun.js'

if (
  !process.env.MAILGUN_USERNAME ||
  !process.env.MAILGUN_KEY ||
  !process.env.MAILGUN_DOMAIN
) {
  throw new Error('Missing contact environment variables.')
}

const mailgun = new Mailgun(FormData).client({
  username: process.env.MAILGUN_USERNAME,
  key: process.env.MAILGUN_KEY,
})

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    return response.status(405).end()
  }

  const fields = JSON.parse(request.body) as ContactFields
  const fieldsAreInvalid = Object.values(fields).some(field => !field)

  if (fieldsAreInvalid) {
    return response.status(400).end()
  }

  try {
    await mailgun.messages.create(process.env.MAILGUN_DOMAIN as string, {
      from: `sanny.io <mail@sanny.io>`,
      to: 'sannysherief@gmail.com',
      subject: `Contact from ${fields.name} (${fields.email})`,
      text: fields.message,
    })

    return response.status(200).end()
  }

  catch (e) {
    return response.status(500).end()
  }
}
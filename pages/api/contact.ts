import type { NextApiRequest, NextApiResponse } from 'next'
import mailgun from 'mailgun-js'
import { ContactFields } from '../../components/Contact'

if (!process.env.MAILGUN_KEY || !process.env.MAILGUN_DOMAIN) {
  throw new Error('Missing environment variables.')
}

const mail = mailgun({ apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN })
const message = {
  from: `sanny.io <mail@sanny.io>`,
  to: 'sannysherief@gmail.com',
}

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    return response.status(405).end()
  }

  const fields = JSON.parse(request.body) as ContactFields
  const fieldsAreInvalid = Object.values(fields).some(field => !field)

  if (fieldsAreInvalid) {
    return response.status(400).end()
  }

  mail.messages().send({
    ...message,
    subject: `Contact from ${fields.name} (${fields.email})`,
    text: fields.message,
  }, error => {
    if (error) {
      return response.status(500).end()
    }

    return response.status(200).end()
  })
}
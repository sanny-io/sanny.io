'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_KEY)

export async function sendMail(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  try {
    if (!name || !email || !message) {
      throw new Error('Missing parameters')
    }

    const { data, error } = await resend.emails.send({
      from: 'sanny.io <mail@sanny.io>',
      to: 'sannysherief@gmail.com',
      subject: `Contact from ${name} (${email})`,
      text: message as string,
    })

    if (error) {
      throw new Error(error.message)
    }
  }

  catch (error) {
    console.error(error)

    return {
      error: 'Something went wrong. Contact me manually at sannysherief@gmail.com',
    }
  }
}
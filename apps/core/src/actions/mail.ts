'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_KEY)

type FormState = {
  error: boolean,
  message: string,
}

export async function sendMail(previousState: FormState, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  try {
    if (!name || !email || !message) {
      throw new Error('Missing parameters')
    }

    const { error } = await resend.emails.send({
      from: 'sanny.io <mail@sanny.io>',
      to: 'sannysherief@gmail.com',
      subject: `Contact from ${name} (${email})`,
      text: message as string,
    })

    if (error) {
      throw new Error(error.message)
    }

    return {
      error: false,
      message: 'Message received! Thanks',
    }
  }

  catch (error) {
    console.error(error)

    return {
      error: true,
      message: 'Something went wrong. Contact me directly at <a href="mailto:sannysherief@gmail.com">sannysherief@gmail.com</a>',
    }
  }
}
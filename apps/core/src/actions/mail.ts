'use server'

import { initializePayload } from '@/services/payload'
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
  const realMessage = formData.get('realMessage')
  const payload = await initializePayload()
  const contactMe = await payload.findGlobal({
    slug: 'contact-me',
  })

  try {
    if (!name || !email || !realMessage) {
      throw new Error('Missing parameters')
    }

    if (message) {
      throw new Error('Spam detected')
    }

    const { error } = await resend.emails.send({
      from: 'sanny.io <mail@sanny.io>',
      to: contactMe.email,
      subject: `Contact from ${name} (${email})`,
      text: realMessage as string,
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
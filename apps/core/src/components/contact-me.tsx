'use client'

import { sendMail } from '@/actions/mail'
import type { ContactMe } from 'payload-types'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

export function ContactMe({ title, description }: ContactMe) {
  const [formState, formAction] = useActionState(sendMail, {
    error: false,
    message: '',
  })

  return (
    <section
      id='contact'
      className='px-8 pt-16 text-white bg-gray-800'
    >
      <h2
        className='mb-4 text-5xl tracking-widest text-center !text-secondary uppercase md:text-6xl font-light'
      >
        {title}
      </h2>

      <p
        className='text-2xl font-light text-center text-gray-400'
      >
        {description}
      </p>

      <form
        className='max-w-4xl py-8 mx-auto'
        action={formAction}
      >
        <div
          className='grid grid-cols-1 gap-4 mb-4 text-center md:grid-cols-2'
        >
          <input
            required
            type='text'
            name='name'
            placeholder='Name'
            autoComplete='off'
          />

          <input
            required
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='off'
          />

          <textarea
            tabIndex={-1}
            name='message'
            rows={5}
            placeholder='Message'
            autoComplete='off'
            className='fixed left-[9999px]'
          />

          <textarea
            required
            name='realMessage'
            rows={5}
            placeholder='Message'
            autoComplete='off'
            className='md:col-span-2'
          />
        </div>

        <BottomSection
          formState={formState}
        />
      </form>
    </section>
  )
}

function BottomSection({
  formState,
}: {
  formState: {
    error: boolean,
    message: string,
  }
}) {
  const formStatus = useFormStatus()

  return (
    <div
      className='flex gap-4 items-start md:items-center justify-end flex-col-reverse md:flex-row'
    >
      {
        formState.message && !formStatus.pending
          ? <span
            className={formState.error ? 'text-red-500' : 'text-green-500'}

            dangerouslySetInnerHTML={{
              __html: formState.message,
            }}
          />
          : null
      }

      {
        formStatus.pending
          ? <span>
            Sending...
          </span>
          : null
      }

      <button
        type='submit'
        disabled={formStatus.pending}
        className='block w-full primary button md:inline-block md:w-max'
      >
        Submit
      </button>
    </div>
  )
}
'use client'

import { sendMail } from '@/actions/mail'
import { useFormStatus } from 'react-dom'

const fieldClassName = 'p-2 bg-gray-900 border border-gray-700 shadow-2xl outline-none focus:border-blue-500 transition'

export async function ContactMe() {
  const form = useFormStatus()

  console.log({ form })

  return (
    <section
      id='contact'
      className='px-8 pt-16 text-white bg-gray-800'
    >
      <h2
        className='mb-4 text-5xl tracking-widest text-center !text-secondary uppercase md:text-6xl font-light'
      >
        Contact me
      </h2>

      <p className='text-2xl font-light text-center text-gray-400'
      >
        Let's get this bread.
      </p>

      <form
        className='max-w-4xl py-8 mx-auto'
        action={sendMail}
      >
        <div
          className='grid grid-cols-1 gap-4 mb-4 text-center md:grid-cols-2'
        >
          <input
            required
            type='text'
            name='name'
            placeholder='Name'
            className={fieldClassName}
          />

          <input
            required
            type='email'
            name='email'
            placeholder='Email'
            className={fieldClassName}
          />

          <textarea
            required
            name='message'
            rows={5}
            placeholder='Message'
            className={`${fieldClassName} md:col-span-2`}
          />
        </div>

        <div
          className='flex'
        >
          <button
            type='submit'
            // disabled={hasError === false}
            className='block w-full mb-4 primary button md:inline-block md:w-max ml-auto'
          >
            Submit
          </button>

          {/* <span
            className={
              `md:ml-4 inline-block ${hasError === null && 'hidden'} ${hasError ? 'text-red-500' : 'text-green-500'}`
            }>
            {
              hasError
                ? <>Error. Contact me directly at <a href={`mailto:${email}`} className='font-bold'>{email}</a></>
                : <>Message received! Thanks.</>
            }
          </span> */}
        </div>
      </form>
    </section>
  )
}
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Field from './Field'

export type ContactFields = {
  name: string,
  email: string,
  message: string,
}

export type ContactProps = {
  email: string,
}

export default function Contact({ email }: ContactProps) {
  const [hasError, setHasError] = useState<boolean | null>(null)
  const handleSubmit = async (fields: ContactFields) => {
    const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(fields) })

    setHasError(response.status !== 200)
  }

  return (
    <section id="contact" className="px-8 pt-16 text-white bg-gray-800">
      <h2 className="mb-4 text-5xl tracking-widest text-center !text-secondary uppercase md:text-6xl font-light">Contact me</h2>
      <p className="text-2xl font-light text-center text-gray-400">Let's get this bread.</p>

      <Formik
        initialValues={{ name: '', email: '', message: '' } as ContactFields}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="max-w-4xl py-8 mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-4 text-center md:grid-cols-2">
              <Field required name="name" placeholder="Name" />
              <Field required name="email" type="email" placeholder="Email" />
              <Field required as="textarea" name="message" rows={5} placeholder="Message" className="md:col-span-2" />
            </div>

            <div className="space-x-4">
              <button
                type="submit"
                disabled={hasError === false}
                className="w-full primary button md:w-max"
              >
                Submit
              </button>

              <span
                className={
                  `font-semibold tracking-wide ${hasError === null && 'hidden'} ${hasError ? 'text-red-500' : 'text-green-500'}`
                }>
                Message received! Thanks.
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
import React from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';

const inputClassName = 'p-2 bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none';

export default function Contact() {
  return (
    <section className="px-8 pt-16 text-white bg-gray-800">
      <h2 className="mb-4 text-5xl tracking-widest text-center uppercase md:text-6xl">Contact me</h2>
      <h4 className="text-2xl font-light text-center text-gray-400">Let's get this bread.</h4>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={values => console.log(values)}
      >
        {() => (
          <Form className="max-w-4xl py-8 mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4 text-center">
              <Field required name="name" placeholder="Name" className={inputClassName} />
              <Field required name="email" type="email" placeholder="Email" className={inputClassName} />
              <Field required as="textarea" name="message" rows={5} placeholder="Message" className={`${inputClassName} col-span-2`} />
            </div>
            <button className="px-4 py-2 bg-blue-600 shadow-2xl hover:bg-blue-700" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
import React, { useState } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import firebase from '../../firebase';
// @ts-ignore
import { attributes as info } from '../../content/info.md';

const inputClassName = 'p-2 bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none shadow-2xl';

export default function Contact() {
  const [[hasError, message], setResponse] = useState<[boolean, string]>([false, '']);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const handleSubmit = (values: any) => {
    const sendMessage = firebase.functions().httpsCallable('sendMessage');

    setSubmitDisabled(true);

    sendMessage(values)
      .then(({ data }) => {
        setResponse([false, data.message]);
      })
      .catch(() => {
        setResponse([true, `Something went wrong. You can email me at ${info.email}`]);
        setSubmitDisabled(false);
      });
  }

  return (
    <section id="contact" className="px-8 pt-16 text-white bg-gray-800">
      <h2 className="mb-4 text-5xl tracking-widest text-center !text-blue-400 uppercase md:text-6xl font-light">Contact me</h2>
      <h4 className="text-2xl font-light text-center text-gray-400">Let's get this bread.</h4>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="max-w-4xl py-8 mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-4 text-center md:grid-cols-2">
              <Field required name="name" placeholder="Name" className={inputClassName} />
              <Field required name="email" type="email" placeholder="Email" className={inputClassName} />
              <Field required as="textarea" name="message" rows={5} placeholder="Message" className={`${inputClassName} md:col-span-2`} />
            </div>

            <div className="space-x-4">
              <button
                disabled={submitDisabled}
                className="w-full primary button md:w-max"
                type="submit"
              >
                Submit
              </button>
              <span className={`font-semibold tracking-wide ${hasError ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
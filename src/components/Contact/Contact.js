import { Form, Field } from 'formik';
import ErrorMessage from './ErrorMessage';

export default function Contact(
  {
    heading,
    email,
    errors: formErrors,
    error: submissionError,
    loading: awaitingResponse,
    data: response,
  }) {
  return (
    <section className="capitalize px-4 py-5 md:p-6 bg-gradient-to-bl bg-gray-800">
      <h2 className="text-4xl md:text-5xl text-center text-gray-300 mb-12">{heading}</h2>
      <Form className="flex flex-col uppercase font-semibold">
        <div className="flex flex-wrap justify-between -mx-2 mb-4">
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-2 text-gray-500" htmlFor="name">
              Name
              <ErrorMessage name="name" />
            </label>
            <Field
              className="p-4 bg-gray-300 w-full text-2xl"
              id="name"
              name="name"
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-2 text-gray-500" htmlFor="email">
              Email
              <ErrorMessage name="email" />
            </label>
            <Field
              className="p-4 bg-gray-300 w-full text-2xl"
              id="email"
              name="email"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-500" htmlFor="message">
            Message
            <ErrorMessage name="message" />
          </label>
          <Field
            as="textarea"
            className="p-4 bg-gray-300 w-full text-xl"
            id="message"
            name="message"
            rows="6"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          {
            !Object.keys(formErrors).length ?
              <button
                className="px-4 py-2 w-full md:w-auto bg-blue-700 hover:bg-blue-600 text-white"
                type="submit"
              >
                Send Message
              </button>
              :
              <button
                className="px-4 py-2 w-full md:w-auto bg-blue-700 text-white cursor-not-allowed"
                type="submit"
                disabled
              >
                Send Message
            </button>
          }
          <p className={
            `${awaitingResponse ? 'text-gray-300' :
              submissionError ? 'text-red-500' :
                response ? 'text-green-600' : ''}
              normal-case lg:ml-4 mb-2 lg:mb-0 ${!awaitingResponse && !submissionError && !response && 'hidden'}`}
          >
            {
              awaitingResponse ? 'Sending...' :
                response ? 'Message received! Thanks.' :
                  submissionError && `Something went wrong. You can contact me directly at ${email}.`
            }
          </p>
        </div>
      </Form>
    </section>
  );
}
import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ heading, email, endpoint }) => {
  const [status, setStatus] = useState({ type: 'hidden', color: 'text-gray-300', text: 'Workin\' on it...' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();

    if (status.type === 'submitted') return;

    setStatus({ type: 'submitting', color: 'text-gray-300', text: 'Workin\' on it...' })

    axios.post(endpoint, formData)
      .then(() => {
        setStatus({ type: 'submitted', color: 'text-green-600', text: 'Message received! Thanks.' });
      })
      .catch(error => {
        console.log(error);
        setStatus({ type: 'unsubmitted', color: 'text-red-300', text: `Something went wrong. You can contact me directly at ${email}` });
      });
  };

  return (
    <section className="Contact capitalize px-4 py-10 md:p-12 bg-gray-900">
      <h2 className="text-4xl md:text-5xl text-center text-gray-300 mb-12">{heading}</h2>
      <form className="flex flex-col uppercase font-semibold" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between -mx-2 mb-4">
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-2 text-gray-500" htmlFor="name">Name</label>
            <input
              className="p-4 bg-gray-300 w-full placeholder-gray-700 text-2xl"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              value={formData.name}
              disabled={status.type === 'submitted'}
              required
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block mb-2 text-gray-500" htmlFor="email">Email</label>
            <input
              className="p-4 bg-gray-300 w-full placeholder-gray-700 text-2xl"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              value={formData.email}
              disabled={status.type === 'submitted'}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-500" htmlFor="message">Message</label>
          <textarea
            className="p-4 bg-gray-300 w-full text-xl"
            type="text"
            id="message"
            name="message"
            rows="6"
            onChange={handleChange}
            value={formData.message}
            disabled={status.type === 'submitted'}
            required>
          </textarea>
        </div>
        <div>
          {
            status.type === 'submitted' ? (
              <button
                className="px-4 py-2 w-full md:w-auto mb-4 bg-blue-600 text-white cursor-not-allowed"
                type="submit"
                disabled>
                Send Message
                </button>
            ) : (
                <button
                  className="px-4 py-2 w-full md:w-auto mb-4 bg-blue-600 hover:bg-blue-500 text-white"
                  type="submit">
                  Send Message
                </button>
              )
          }
          <p className={`${status.color} normal-case ${status.type === 'hidden' && 'hidden'}`}>{status.text}</p>
        </div>
      </form>
    </section>
  );
};

export default Contact;
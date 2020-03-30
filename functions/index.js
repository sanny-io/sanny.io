require('dotenv').config();

const functions = require('firebase-functions');
const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });
const cors = require('cors')({
  origin: true,
});

exports.sendMessage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    const { name, email, message } = request.body.data;

    if (!name || !email || !message) {
      console.log('Bad request.');
      return response.send({ 'data': { 'error': 'Bad request.' } });
    }

    mailgun.messages().send({
      from: `sanny.io <mail@sanny.io>`,
      to: 'sannysherief@gmail.com',
      subject: `Contact from ${name} (${email})`,
      text: message
    }, (error) => {
      if (error) {
        console.log(error);
        response.send({ 'data': { 'error': 'Server error.' } });
      }
      else {
        response.send({ 'data': { 'message': 'Message received! Thanks.' } });
      }
    });
  })
});

const functions = require('firebase-functions');
const config = functions.config();
const mailgun = require('mailgun-js')({ apiKey: config.mailgun.key, domain: config.mailgun.domain });
const cors = require('cors')({
  origin: true,
});

exports.sendMessage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    const { name, email, message } = request.body.data;

    if (!name || !email || !message) {
      console.log('Bad request.');
      return response.status(400).send({ 'data': { 'error': 'Bad request.' } });
    }

    mailgun.messages().send({
      from: `sanny.io <mail@sanny.io>`,
      to: 'sannysherief@gmail.com',
      subject: `Contact from ${name} (${email})`,
      text: message
    }, (error) => {
      if (error) {
        console.log(error);
        response.status(500).send({ 'data': { 'error': 'Server error.' } });
      }
      else {
        response.status(200).send({ 'data': { 'message': 'Message received! Thanks.' } });
      }
    });
  })
});
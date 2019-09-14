var express = require('express');
var api = express.Router();
var mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

api.post('/contact', function (req, res, next) {
  const { name, email, message } = req.body;

  mailgun.messages().send({
    from: `sanny.io <mail@sanny.io>`,
    to: 'sannysherief@gmail.com',
    subject: `Contact from ${name} (${email})`,
    text: message
  }, (error, body) => {
    console.log(body);
  });
  return res.status(204).send();
});

module.exports = api;

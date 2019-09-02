const express = require('express');
const url = require('url');
const nodemailer = require('email');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('contact');
});

router.post('/send', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var mensagem = req.body.menssagem;

  var emailMessage = `Hi ${name},\n\n Obrigado pelo contato.\n\nSeu email é: ${email}.\n\nSua Mensagem é: ${enquiry}\n.`;

  console.log(emailMessage);
  res.redirect('/contact_send');

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'Seu Email',
      pass: 'Sua senha'
    }
  });

  var emailOptions = {
    from: 'Seu Nome <seu endereço de email>',
    to: email,
    subject: 'Mailer Test',
    text: emailMessage
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (error) {
      console.log(error);
      res.redirect('/contact_send');
    } else {
      console.log('Mensagem enviada: ' + info.response);
      console.log('conteudo do email: ' + emailMessage);
      res.redirect('/email errado');
    }
  });
});

module.exports = router;

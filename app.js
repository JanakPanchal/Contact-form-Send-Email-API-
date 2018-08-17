const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/send', (req, res) => {

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.email_details.name}</li>
      <li>Company: ${req.body.email_details.company}</li>
      <li>Email: ${req.body.email_details.email}</li>
      <li>Phone: ${req.body.email_details.phoneno}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.email_details.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: req.body.email_config.host,
    port: req.body.email_config.port,
    secure: false, // true for 465, false for other ports
    auth: {
        user: req.body.email_config.username, // generated ethereal user
        pass: req.body.email_config.password  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.companyname+'<'+req.body.email_config.username+'>', // sender address
      to: req.body.to, // list of receivers
      subject: req.body.subject, // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      //console.log('Message sent: %s', info.messageId);   
      //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(200,info);
  });
  });

app.listen(3000, () => console.log('Server started on 3000...'));
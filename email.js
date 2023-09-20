const nodemailer=require('nodemailer');
let mailOptions = {
    from: 'joshuah.gutkowski@ethereal.email',
    to: '125015156@sastra.ac.in',
    subject: 'Email from Node-App: A Test Message!',
    text: 'Some content to send',
  };
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'joshuah.gutkowski@ethereal.email',
        pass: 'QzzKKaqQawZFEaP5YJ'
    }
});
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
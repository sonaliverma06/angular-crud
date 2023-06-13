
const nodemailer = require("nodemailer");

exports.sendEmail = function (req, res) {

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "beb3859de94dae",
      pass: "b0848f69b9de79",
    },
  });

  console.log("transporter", transport);

  var mailOptions = {
    from: "beb3859de94dae",
    to: "sonali.bodoliya@iflai.com",
    subject: "reset your password",
    text: "reset your password",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("mail error", error);
      res.send(500, err.message);
    } else {
      console.log("Email sent");
      res.status(200).jsonp(req.body);
    }
  });
};

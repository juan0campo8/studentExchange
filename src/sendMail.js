const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "stevensduckexchange@gmail.com",
      pass: "ukzzymbuxlqtprbh"
   }
});

const mailOptions = {
   from: "stevensduckexchange@gmail.com",
   to: "stevensduckexchange@gmail.com",
   subject: "Nodemailer Test",
   text: "test"
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});

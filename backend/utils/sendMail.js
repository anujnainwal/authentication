const nodemailer = require("nodemailer");
const config = require("../config/config");
const ejs = require("ejs");
const path = require("path");
const os = require("os");

const sendEmail = async (
  email,
  subject,
  content,
  userName,
  productname,
  resetUrl
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: config.HOST,
      service: config.SERVICE,
      port: config.MAIL_PORT,
      secure: true,
      auth: {
        user: config.NODE_USER,
        pass: config.NODE_PASS,
      },
    });

    ejs.renderFile(
      path.join(__dirname + "../../views/password-reset.ejs"),
      {
        email,
        content,
        userName,
        resetUrl,
        productname,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          let mailOptions = {
            from: config.NODE_USER,
            to: email,
            subject: subject,
            html: data,
          };
          transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
              console.log(err);
            }
            console.log("Email send successful. ", data.messageId);
          });
        }
      }
    );
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;

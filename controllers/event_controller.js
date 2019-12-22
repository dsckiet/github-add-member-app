require('dotenv').config();
const Event = require('../models/Event');
const nodemailer = require("nodemailer");
const DevIO = require('../models/Devio');
const qrcode = require("qrcode");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

module.exports.createEvent = (req, res) => {
    return res.render('createEvent', {message: ''});
};

module.exports.register = async (req, res) => {
    // console.log(req.body);
    if(req.body.name == '' || req.body.name == null || req.body.email == '' || req.body.email == null || req.body.year == '' || req.body.year == null || req.body.branch == '' || req.body.branch == null) {
        return res.status(200).json({message: 'incomplete details'});
    } else {
        DevIO.findOne({email: req.body.email}, (err, entry) => {
            if (err) {
                return res.status(200).json({message: 'error occurred'});
            }
            if (entry) {
                return res.status(200).json({message: 'already registered'});
            }
            let receiverMail = req.body.email;
            DevIO.create(req.body, async (err, registered) => {
                if (err) {
                    return res.status(200).json({message: 'error occurred'});
                }
                const qr = await qrcode.toDataURL(String(registered._id))
                let from = `DSCKIET <${process.env.user}>`, 
                    to = receiverMail; 
                let subject = '[DEV iO Invitation] Invitation to attend Dev iO on 31/08/19',
                    html = '<html><body>Hey ' + registered.name + '<br/><r/>You are invited to attend the DEV iO\'19 organised by Developer Student Clubs powered by Google Developers.<br/><br/>Use the below QR code to get the entry during the event. Without this code, you will not be permitted to enter.<br/><img src="' + qr + '"></body></html>',
                    mailOptions = { from, to, subject, html };
                try {
                    await transporter.sendMail(mailOptions);
                    return res.status(200).json({message: 'success'});
                } catch (err) {
                        return res.status(200).json({message: 'error occurred'});
                }

            });
        });
    }
}
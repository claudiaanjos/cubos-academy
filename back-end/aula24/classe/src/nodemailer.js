const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');

const transportador = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'postmaster@alunoscubosacademy.com.br', // generated ethereal user
        pass: 'c12a2648104cad9b63d3bd86fe520158-aff8aa95-7a66330a', // generated ethereal password
    },
});

transportador.use('compile', handlebars({
    viewEngine: {
        extname: '.handlebars',
        defaultLayout: false
    },
    viewPath: './views/'
}));

module.exports = transportador;
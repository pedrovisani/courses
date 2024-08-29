require('dotenv').config();
const express = require('express');
const doubleCsrf = require('csrf-csrf');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
// const flashMessage = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const { csrfErrorHandler } = require('./src/middlewares/middleware');

app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrfErrorHandler);
app.use(routes);

const { invalidCsrfTokenError, generateToken, doubleCsrfProtection } = doubleCsrf ({
    getSecret: (req) => req.secret,
    secret: 'ojsfjwjdsishf3 sdqwjdjowq sdojqmsakdq dasnqmoasd(*&¨%$@!!)))))))',
    cookieName: session=default0,
    cookieOptions: { sameSite: false, secure: false, signed: true},
    size: 64,
    ignoredMethods: ['GET', 'HEAD', 'OPTIONS'],
});

app.use(cookieParser(cookies_secret));
app.use(sessionOptions);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    })
});
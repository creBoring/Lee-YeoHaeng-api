const express = require('express');
const session = require('express-session');
const cors = require('cors');

const authRouter = require('./routes/auth');
// const utils = require('./utils');

const app = express();
const PORT = 3000

// express 옵션들
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors
app.use(cors({
  origin: [
    'https://lyh.creboring.com',
    'http://localhost:8080' // for test
  ]
}))

// session
app.use(session({
  secret: 'l22Salt_!@#so$CutE',
  resave: false,
  saveUninitialized: true
}));

// router init
app.use('/auth', authRouter);

// API CALL NOT FOUND
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error');
})

app.listen(PORT, () => console.log('Lee YeoHaeng API Server listening on port 3000'));

// db environment variables
/*
const params = {
  host: { Name: '/lyh/db/writer-host', WithDecryption: true },
  user: { Name: '/lyh/db/user', WithDecryption: true },
  password: { Name: '/lyh/db/password', WithDecryption: true },
  database: { Name: '/lyh/db/database', WithDecryption: true }
}
process.env.DB_HOST = utils.getParameter(params.host);
process.env.DB_USER = utils.getParameter(params.user);
process.env.DB_PASSWORD = utils.getParameter(params.password);
process.env.DB_DATABASE = utils.getParameter(params.database);
*/

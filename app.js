const express = require('express');
const session = require('express-session');
const AWS = require('aws-sdk');

const app = express();
const PORT = 3000

const authRouter = require('./routes/auth');

// express 옵션들
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// session
app.use(session({
  secret: 'l22Salt_!@#so$CutE',
  resave: false,
  saveUninitialized: true
}));

// db environment variables
const ssm = new AWS.SSM({region: 'ap-northeast-2'});
const params = {
  host: { Name: '/lyh/db/writer-host', WithDecryption: true },
  user: { Name: '/lyh/db/user', WithDecryption: true },
  password: { Name: '/lyh/db/password', WithDecryption: true },
  database: { Name: '/lyh/db/database', WithDecryption: true }
}
process.env.DB_HOST = ssm.getParameter(params.host);
process.env.DB_USER = ssm.getParameter(params.user);
process.env.DB_PASSWORD = ssm.getParameter(params.password);
process.env.DB_DATABASE = ssm.getParameter(params.database);


app.use('/auth', authRouter);
app.listen(PORT, () => console.log('Lee YeoHaeng API Server listening on port 3000'))

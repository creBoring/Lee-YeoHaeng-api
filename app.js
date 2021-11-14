const express = require('express');
const session = require('express-session');
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

app.use('/auth', authRouter);
app.listen(PORT, () => console.log('Lee YeoHaeng API Server listening on port 3000'))

const express = require('express');
const app = express();
const PORT = 3000

const authRouter = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRouter);
app.listen(PORT, () => console.log('Lee YeoHaeng API Server listening on port 3000'))

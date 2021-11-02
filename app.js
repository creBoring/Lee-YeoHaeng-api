const express = require('express');
const app = express();
const PORT = 3000

const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);
app.listen(PORT, () => console.log('Lee YeoHaeng API Server listening on port 3000'))

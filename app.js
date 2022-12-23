const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./Router/userRouter');

const app = express();

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public}`));

//routers
app.use('/api/v1/user', userRouter);

module.exports = app;

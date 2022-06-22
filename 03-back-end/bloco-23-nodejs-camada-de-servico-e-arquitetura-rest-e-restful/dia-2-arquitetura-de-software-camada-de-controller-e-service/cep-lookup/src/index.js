require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const pingRouter = require('./routes/pingRouter');
const cepRouter = require('./routes/cepRouter');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/ping', rescue(pingRouter));
app.use('/cep', rescue(cepRouter));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
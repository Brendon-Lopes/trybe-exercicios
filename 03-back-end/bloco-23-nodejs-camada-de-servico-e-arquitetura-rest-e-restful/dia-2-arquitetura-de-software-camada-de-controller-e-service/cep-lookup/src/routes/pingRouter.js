const express = require('express');
const pingRouter = express.Router();

const Ping = require('../controllers/Ping');

pingRouter.get('/', Ping.getPing);

module.exports = pingRouter;

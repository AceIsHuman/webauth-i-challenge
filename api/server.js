const express = require('express');
const helmet = require('helmet');
const apiRouter = require('./api-router.js');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const server = express();

const sessionOptions = {
  name: process.env.SESSION_NAME || 'mycookie',
  secret: process.env.SESSION_PASS || 'cookiesareyummyyummy',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,

  store: new knexSessionStore({
    knex: require('../knex/dbConfig.js'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
};

server.use(helmet());
server.use(express.json());
server.use(session(sessionOptions))

server.use('/api', apiRouter);

module.exports = server;
var express = require('express');
var usersRouter = require('./users');

class IndexRouter extends express.Router {
  constructor() {
    super();

    this.use('/users', usersRouter);
  }
}

module.exports = IndexRouter;

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexHtml = require('./routes/index-html');
const IndexRouter = require('./routes/index-router');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', new IndexRouter);
app.get('*', indexHtml);
app.use((req, res) => res.status(404).send('Not found'));

module.exports = app;

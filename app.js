const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// import router categories
const categoriesRouter = require('./app/api/v1/categories/router');

// membuat variabel v1
const v1 = '/api/v1/cms';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api semina',
  });
});

// gunakan categories router
app.use(v1, categoriesRouter);

module.exports = app;
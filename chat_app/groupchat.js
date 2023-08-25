const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs').promises; // Use the promises version of fs for async operations

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const users = {};

const loginpage = require('./login')(users);
const messagepage = require('./grouppage')(users, fs);
app.use(loginpage);
app.use(messagepage);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3300);

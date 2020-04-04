const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
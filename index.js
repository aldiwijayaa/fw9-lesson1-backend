require('dotenv').config()

const express = require('express')
const cors = require('cors')

global.__basepath = __dirname;

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/public', express.static('assets'));

app.get('/', (req, res) => {
  return res.json({
    succes: true,
    message: 'Backend is running well'
  });
});

app.use('/', require('./src/routes'))

app.post('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Posted data success to send'
  });
});

app.use('*', (req, res) => {
  return res.status(404).send({
    success: false,
    message: 'Resource not found'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
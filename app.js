const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.use("*",(req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

app.use(express.static(path.join(__dirname, './dist')));

const server = app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}`);
});

module.exports = app;
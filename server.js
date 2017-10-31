'use strict';

const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({"check_list-api": true});
});

app.get('*', (req, res) => {
  res.end("Please try later fellas!");
});

app.listen(3000, () => {
  console.log('Node.js server is listening on port 3000');
});

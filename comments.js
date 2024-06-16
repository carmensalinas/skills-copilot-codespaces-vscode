// Create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

// Create a comments.json file
const comments = require('./comments.json');
fs.writeFileSync('./comments.json', JSON.stringify(comments), 'utf8');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments), 'utf8');
  res.json(comment);
});

// Listen to port
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
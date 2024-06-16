// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());

app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(data);
    }
  });
});

app.get('/comments/:id', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      const comments = JSON.parse(data);
      const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
      if (comment) {
        res.send(comment);
      } else {
        res.status(404).send('Comment not found');
      }
    }
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      const comments = JSON.parse(data);
      const newComment = req.body;
      newComment.id = comments.length + 1;
      comments.push(newComment);
      fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
        if (err) {
          res.status(500).send('Error writing file');
        } else {
          res.status(201).send(newComment);
        }
      });
    }
  });
});

app.put('/comments/:id', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      const comments = JSON.parse(data);
      const comment = comments.find((comment) => comment.id === parseInt(req.params
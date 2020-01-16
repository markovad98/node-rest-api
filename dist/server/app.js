'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(function () {
  return console.log('meow');
});

// const express = require('express');
// const bodyParser = require('body-parser');
//
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// const PORT = 3000;
//
// const posts = [
//     { title: 'title 1', text: 'text 1' },
//     { title: 'title 2', text: 'text 2' },
//     { title: 'title 3', text: 'text 3' },
//     { title: 'title 4', text: 'text 4' },
//     { title: 'title 5', text: 'text 5' },
//     { title: 'title 6', text: 'text 6' },
// ];
//
// app.get('/posts', (req, res) => {
//     return res.send(posts);
// });
//
// app.get('/posts/:id', (req, res) => {
//     const { params: { id } } = req;
//     return res.send(posts[id]);
// });
//
// app.post('/posts', (req, res) => {
//     console.log('req body: ', req.body);
//     const post = req.body;
//     posts.push(post);
//     return res.send(posts);
// });
//
// app.listen(PORT, () => {
//     console.log(`Server started on ${PORT}...`);
// });
//
//
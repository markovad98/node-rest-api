'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
_mongoose2.default.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });
var PORT = '3000';

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', _PostController2.default.cr);

app.get('/posts');

app.get('/posts/:id');

app.delete('/posts/:id');

app.put('/posts/:id');

app.listen(PORT, function () {
    console.log('Server is running on ' + PORT + '...');
});
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Post = require('../models/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostController = function () {
    function PostController() {
        _classCallCheck(this, PostController);
    }

    _createClass(PostController, null, [{
        key: 'index',
        value: function index(req, res) {
            _Post2.default.find().then(function (err, data) {
                err ? res.send(err) : res.json(data);
            });
        }
    }, {
        key: 'create',
        value: function create(req, res) {
            var _req$body = req.body,
                title = _req$body.title,
                text = _req$body.text;


            var post = new _Post2.default({
                title: title,
                text: text
            });

            post.save().then(function () {
                res.send({ status: 'OK' });
                console.log('\u0417\u0430\u043F\u0438\u0441\u044C \u043F\u043E\u0434 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C ' + title + ' \u0431\u044B\u043B\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 \u0432 \u0411\u0414...');
            });
        }
    }, {
        key: 'read',
        value: function read(req, res) {
            var id = req.params.id;


            _Post2.default.findOne({ _id: id }).then(function (err, data) {
                err ? res.send(err) : res.json(data);
            });
        }
    }, {
        key: 'update',
        value: function update(req, res) {

            _Post2.default.findByIdAndUpdate(req.params.id, { $set: req.body }).exec(function (err, result) {
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                }

                res.json(result);
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _Post2.default.deleteOne({ _id: req.params.id }).then(function (post) {
                if (post) {
                    res.json({ status: 'deleted' });
                } else {
                    res.json({ status: 'Cant delete' });
                }
            });
        }
    }]);

    return PostController;
}();

exports.default = PostController;
import PostModel from '../models/Post';

class PostController {
    
   static index(req, res) {
        PostModel.find().then((err, data) => {
            err ? res.send(err) : res.json(data);
        });
    }

    static create(req, res) {
        const { title, text } = req.body;
    
        const post = new PostModel({
            title,
            text,
        });
    
        post.save().then(() => {
            res.send({ status: 'OK' });
            console.log(`Запись под названием ${title} была сохранена в БД...`);
        });
    }

    static read(req, res) {
        const { params: { id } } = req;
    
        PostModel.findOne({ _id: id }).then((err, data) => {
            err ? res.send(err) : res.json(data);
        });
    }

    static update(req, res) {
    
        PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}).exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                })
            }
            
            res.json(result);
        })
    }

    static delete(req, res) {
        PostModel.deleteOne({_id: req.params.id }).then(post => {
            if (post) {
                res.json({ status: `deleted`});
            } else {
                res.json({ status: `Cant delete`});
            }
        })
    }
}

export default PostController;
import mongoose from 'mongoose';
import PostModel from "./models/Post";
import express from 'express';
import bodyParses from 'body-parser';
import PostController from './controllers/PostController'

const app = express();
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });
const PORT = '3000';

app.use(bodyParses.urlencoded({ extended: true }));
app.use(bodyParses.json());

app.post('/posts', PostController.cr);

app.get('/posts', );

app.get('/posts/:id', );

app.delete('/posts/:id', );

app.put('/posts/:id',);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
});


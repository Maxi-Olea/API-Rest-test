const express = require('express');
const postSchema = require('../models/post');

const router = express.Router();

//create post
router.post('/posts', (req, res) => {
    const post = postSchema(req.body);
    post.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all posts 
router.get('/posts', (req, res) => {
    const post = postSchema;
    post.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get post by id
router.get('/posts/:id', (req, res) => {
    const { id } = req. params;
    const post = postSchema;
    post.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete post by id
router.delete('/posts/:id', (req, res) => {
    const { id } = req. params;
    const post = postSchema;
    post.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update post by id
router.put('/posts/:id', (req, res) => {
    const { id } = req. params;
    const { title, body } = req.body;
    const post = postSchema;
    post.updateOne({ _id: id }, { $set: { title, body } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
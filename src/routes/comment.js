const express = require('express');
const commentSchema = require('../models/comment');

const router = express.Router();

//create a comment
router.post('/comments', (req, res) => {
    const comment = commentSchema(req.body);
    comment.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all comments
router.get('/comments', (req, res) => {
    commentSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all comments by postId
router.get('/comments/:postId', (req, res) => {
    const comment = commentSchema;
    const { postId } = req.params;
    comment.findOne({ postId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete comment by id
router.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = commentSchema;
    comment.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update comment by id
router.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    commentSchema.updateOne({ _id: id }, { $set: { comment } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
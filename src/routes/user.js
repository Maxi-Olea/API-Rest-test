const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

//create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all users
router.get('/users', (req, res) => {
    const user = userSchema;
    user.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get user by id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = userSchema;
    user.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

//delete user by id
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//update user by id
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, username, email, password, address, birthdate, phone } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { name, username, email, password, address, birthdate, phone  } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router;
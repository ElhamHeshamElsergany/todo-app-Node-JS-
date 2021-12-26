const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { login } = require('../controllers/user')
const { route } = require('./todo');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const users = await User.find().exec()
  res.json(users);
})

router.post('/', async (req, res, next) => {
  const user = req.body;
  const newUser = await User.create(user)
    .then(data => res.json(data))
    .catch(err => next(err));
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  const token = await login({ username, password });
  res.json({ token })
})

router.patch('/:userName', async (req, res) => {
  const updateObject = req.body;
  const { id } = req.params;
  await User.updateOne(updateObject).then(data => res.send('Done Edit'))
    .catch(e => next(e))
})

router.delete('/:userName', async (req, res) => {
  const deletedObject = req.body;
  const { id } = req.params;
  await User.deleteOne(deletedObject).then(data => res.send('this todo is Deleted'))
    .catch(d => next(d))
})
module.exports = router;

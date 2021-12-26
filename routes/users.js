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

router.patch('/:id', async (req, res, next) => {
  const updateObject = req.body;
  const { id } = req.params;
  await User.findByIdAndUpdate(req.params.id, updateObject).then(data => res.send('Done Editing'))
    .catch(e => next(e))
})

router.delete('/:id', async (req, res) => {
  const deletedObject = req.body;
  const { id } = req.params;
  await User.findByIdAndDelete(req.params.id, deletedObject).then(data => res.send('this todo is Deleted'))
    .catch(d => next(d))
})
module.exports = router;

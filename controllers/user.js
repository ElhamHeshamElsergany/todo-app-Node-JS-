const jwt = require('jsonwebtoken');
const User = require('../models/user');

const login = async ({ username, password }) => {
  const user = await User.findOne({ username }).exec(); // 1
  const isValid = await user.comparePassword(password); // 2
  if (!isValid) {
    throw new Error('UN_AUTH')
  }
  // 3
  // const { SECRET } = process.env
  const token = jwt.sign({
    username, _id: user.id,
    maxAge: '1d'
  }, 'fjoiy43yfh8743tyf4hry4hf78436hrfyr7437thf48395')
  return token;
}

module.exports = {
  login
}
const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todo');
const userRoutes = require('./routes/users');
const authMiddleware = require('./middlewares/auth')
const app = express();


mongoose.connect('mongodb://localhost:27017/test');

app.use(express.json());
app.use('/users', userRoutes);
app.use(authMiddleware);
app.use('/todos', todosRoutes)


app.use('*', (req, res, next) => {
  res.status(404).end();

})
app.use('*', (req, res, next) => {
  res.status(500).json({ err });

})


app.listen(3000, () => {
  console.log('App is running on port: 3000');
})
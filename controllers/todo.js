const Todo = require("../models/todo");

const create = (todo) => Todo.create(todo);
const find = (query) => Todo.find(query);




module.exports = {
  create,
  find, 
}

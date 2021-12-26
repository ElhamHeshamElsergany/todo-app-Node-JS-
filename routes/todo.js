const express = require('express');
const { create, find, update } = require('../controllers/todo');
const{validateTodo}=require('../middlewares/validation')
const router = express.Router();

router.get('/', async (req, res, next) => {
  find({})
    .then(docs => res.json(docs))
    .catch(e => next(e))
});


router.post('/',validateTodo, async (req, res, next) => {
  const userId = req.user.id
  
  create({ ...req.body, user: userId })
    .then(doc => res.json(doc))
    .catch(e => next(e))
});

router.patch('/:id', async (req, res, next) => {
    update({ })
    const { id } = req.params;
    update(id, req.body).then(data => res.send('Done Edit'))
    .catch(e => next(e))
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    deleteOne(id, req.body).then(data => res.send('this todo is Deleted'))
    .catch(d => next(d))
})

module.exports = router;
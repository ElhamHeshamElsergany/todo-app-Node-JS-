const mongoose = require('mongoose');
const todoschema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 5,
        maxlength: 20
    },
    status: {
        type: String,
        default: 'To Do'
    },
    tags: {
        type: [String],
        maxlength: 10
    },
    createdAt: {
        type: Date,
        timestamps: true
    },
    updatedAt: {
        type: Date,
        timestamps: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        require: true
    }
});

const Todo = mongoose.model('Todo', todoschema);
module.exports = Todo;




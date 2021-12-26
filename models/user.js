// username: String, required, unique, min 8
// password : String, required,
// firstName: String,required, min length 3, max length 15
// lastName: String,required, min length 3, max length 15
// dob: Date, optional
// createdAt: Date, timeStamp,
// updatedAt: Date, timeStamp
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        maxlength: 15
      },
      password: {
        type: String,
        required: true
      },
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 15
  },
  lasttName: {
    type: String,
    minlength: 3,
    maxlength: 15
  },
  createdAt: {
    type: Date,
    timestamps: true
},
updatedAt: {
    type: Date,
    timestamps: true
},
  dob: Date,
},
  {
    toJSON: {
      transform: (doc, ret, options) => {
        delete ret.password;
        delete ret.__v
        return ret;
      },
    }
  }
);


userSchema.pre('save', function () {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
});

userSchema.methods.comparePassword = function (password) {
  const isValid = bcrypt.compareSync(password, this.password);
  return isValid
}

const User = mongoose.model('User', userSchema);


module.exports = User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length === 10 && !isNaN(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

module.exports = mongoose.model("User", UserSchema);

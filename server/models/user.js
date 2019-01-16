var mongoose = require("mongoose");

//mongoose model with validation
var User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

//example on how to add user
// var newUser = new User({
//   name: "Steven",
//   email: "thomason84@hotmail.com"
// });
//
// newUser.save().then(
//   doc => {
//     console.log("Saved user", doc);
//   },
//   e => {
//     console.log("Unable to save user info");
//   }
// );

module.exports = { User };

var mongoose = require("mongoose");

//mongoose model with validation
var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//example on how to add a todo
// var newTodo = new Todo({
//   text: "Eat Dinner",
//   completed: false
// });
//
// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo");
//   }
// );

module.exports = { Todo };

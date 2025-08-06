const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kash1ish:k2114%40shish@cluster0.fme53.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
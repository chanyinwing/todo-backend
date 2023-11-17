import Todo from "../models/todo.model.js";

export const addToDo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).send(newTodo);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    console.log(allTodo)
    res.send(allTodo);
  } catch (err) {
    res.send("cannot get todolist with error: " + err);
  }
};

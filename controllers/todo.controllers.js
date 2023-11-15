import Todo from "../models/todo.model";

export const addToDo = async (req, res) => {
 try{
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200);
 }catch(err){
    res.status(400).send(err)
 }
}
import express from "express";
import { addToDo } from "../controllers/todo.controllers";

const router = express.Router();

router.post('/', addToDo)

export default router
import express from "express";
import { addToDo, getTodo } from "../controllers/todo.controllers.js";

const router = express.Router();

router.post("/", addToDo);
router.get("/", getTodo)

export default router;

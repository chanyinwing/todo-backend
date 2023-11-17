import todoRoutes from './todo.routes.js';
import express from 'express';

const router = express.Router();

// router.use('/', function (req, res){
//     res.send('/')
// })

router.use('/todo', todoRoutes)

export default router
import todoRoutes from './todo.routes';
import express from 'express';

const router = express.Router();

router.use('/', function (req, res){
    res.send('Hi')
})

router.use('/todo', todoRoutes)

export default router
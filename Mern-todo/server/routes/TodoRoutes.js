import express from 'express';

const router = express.Router();

import {getAllTodos,getSingleTodo,delteTodo,updateTodo,addTodo} from '../controlars/TodoControlars'

router.get('/',getAllTodos);
router.get('/:id',getSingleTodo);
router.post('/',addTodo);
router.delete('/:id',delteTodo);
router.patch('/:id',updateTodo);

export default router;
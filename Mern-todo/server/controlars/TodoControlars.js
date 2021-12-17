import {Todo} from '../models/TodoModels'

export const getAllTodos = async ()=>{
    const data = await Todo.find({});
    if(data){
        res.json(data);
    }else{
        res.json({msg: 'There are some serverSide Error'})
    }
};

export const getSingleTodo = async ()=>{
    const data = await Todo.findById(req.params.id);
    if(data){
        res.json(data);
    }else{
        res.json({msg: 'There are some serverSide Error'})
    }
};

export const addTodo = async ()=>{
    const body = req.body;
    console.log(body)
    const data = await Todo.create(body)
    if(data){
        res.json(data);
    }else{
        res.json({msg: 'There are some serverSide Error'})
    }
};

export const delteTodo = async ()=>{
    const data = await Todo.findByIdAndRemove(req.params.id);
    if(data){
        res.json(data);
    }else{
        res.json({msg: 'There are some serverSide Error'})
    }
};
export const updateTodo = async ()=>{
    const data = await Todo.findByIdAndUpdate(req.params.id);
    if(data){
        res.json(data);
    }else{
        res.json({msg: 'There are some serverSide Error'})
    }
};
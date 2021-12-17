import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    username:{
       type:String,
       required:true, 
    },
    photo:{
        type:String,
    }
},{timestamps:true,collection:'todos'});

const Todo = mongoose.model('Todo',todoSchema);

export {Todo,Fm};



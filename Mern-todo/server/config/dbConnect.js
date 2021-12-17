import mongoose from 'mongoose';

const dbConnetion = async ()=> {
  const connetion=await  mongoose.connect(`${process.env.DB_CONNECTION}`);
  if(connetion){
      console.log("Database Connected!!!")
  }else{
      console.log('Database Connection Faild')
  }
}

export default dbConnetion;
import mongoose from 'mongoose';

const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
   
        })
        console.log(`mongo database is connected!!! ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

export default connectDB
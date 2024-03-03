import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

 export const connectDB = async ()=>{
     console.log('db connection chla')
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('mongodb connected',connectionInstance.connection.host)
    }catch (e) {
        console.log('error connect nhi hua',e)
        process.exit(1)
    }
}
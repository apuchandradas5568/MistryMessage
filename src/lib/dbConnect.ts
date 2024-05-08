import mongoose from "mongoose";


type ConnectionObject  = {
    isConnected? : number
}


const connection: ConnectionObject = {} 

async function dbConnect() : Promise<void> {
    if(connection.isConnected) {
      console.log("Already connected to database");
      return
      
    }


    try {
       const db =  await mongoose.connect("mongodb+srv://ariyanavra:Apu1234567@cluster0.q1s8yo1.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0" || "", {})
       connection.isConnected = db.connections[0].readyState


       console.log(db);
       

       console.log("DB connected successfully");
       
    } catch (error) {
        

        console.log("Database connection failed" , error);
        

        process.exit(1)
    }
}



export default dbConnect
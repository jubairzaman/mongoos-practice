
import app from "./App"
import mongoose from "mongoose";
const port = 5000




//Database Connection
async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-Mongoose');
    console.log("Database Connection Successfull")
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
      })
    }catch(err){
        console.log(`Failed To Connect Database `,err);

    }
}
bootstrap();


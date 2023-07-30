import express from "express"
import db from "./models"
import { json } from "sequelize"
const app = express()
const userController = require("./controller/user.controller")
const port = process.env.PORT || 6000

app.use(express.json());

app.use('/api',userController)

//ERROR HANDLING
app.use((err:any,req:any,res:any,next:any)=>{
  console.log(err);
  res.status(500).send("internal server error")

})

//DB CONNECTION
const dbConnect = async () => {
    try {
      await db.sequelize.sync(
        { force: false },
        console.log({
          message: "db connected successfully",
        })
      );
    } catch (error) {
      console.log(error);
    }
};
//dbConnect();


//PORT LISTENING
app.listen(port,()=>{
    console.log(`app running successfully on ${port}`);
    
})
















  
  

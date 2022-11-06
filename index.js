const express = require("express")
const {connection}=require("./config/db")
const {UserModel}=require("./models/UserModel")
const app = express()
const cors = require("cors")
app.use(express.json())
require("dotenv").config()

const PORT =process.env.PORT || 8001

app.get("/", async(req,res)=>{
    const data= await UserModel.find()
    res.send(data)
})

app.post("/create", async(req,res)=>{
    const payload=req.body;
    await UserModel.insertMany([payload])
    res.send("data added successfully")
})

app.delete("/:todoId", async(req,res)=>{
    const param= req.params["todoId"];
 
   await UserModel.deleteMany({id:param})
  
    res.send("deleted successfully")
  })

  app.put("/:todoId", async(req,res)=>{
    const param= req.params["todoId"];
   
    const data=req.body
   
   await UserModel.updateMany({id:param},{$set:{id:data.id, name:data.name,email:data.email}})
  
    res.send("updated successfully")
  })


app.listen(PORT,async()=>{
    try{
     await connection
        console.log("connection to db successfully")

    }
    catch(err){
        console.log(err)
    }
    console.log("listen to port 8000")
})
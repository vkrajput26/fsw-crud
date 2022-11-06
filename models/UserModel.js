const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
})

const UserModel= mongoose.model("fswCrud",userSchema)

module.exports={
    UserModel
}
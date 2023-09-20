const mongoose =require("mongoose");

const UserSchema= new mongoose.Schema (
    {
        userName :{
            type:String,
            require:true
        },
        password :{
            type:String,
            require:true
        },
        name :{
            type:String,
            require:true
        },
        mobileNumber :{
            type:String,
            require:true
        },
    }
)

const UsersSchema= mongoose.model("users", UserSchema, "users");
module.exports={UsersSchema};
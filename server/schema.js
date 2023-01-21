const mongoose  = require("mongoose");

const schema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        },
    phonenumber:{
        type:Number,
        required:true
    },
    password:{
        type:String||Number,
        required:true
    }
})


module.exports = mongoose.model("loginform",schema)
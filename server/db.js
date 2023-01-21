const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://mdarsath:1999@cluster0.cez4d.mongodb.net/test",()=>{
    console.log("db connected successfully")
})
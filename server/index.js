const exp = require("express");
const app = exp();
const cors = require("cors");
const middleware = require("morgan");
const db = require('./schema')
require('./db')
app.use(exp.json(),middleware("dev"),cors())


app.get("/",(req,res)=>{
    res.send("hello world")
})
//create user 
app.post("/addUser",async (req,res)=>{
 const username = await db.findOne({username:req.body.username})
 const email = await db.findOne({email:req.body.email})
if(email){
    res.send("email already exist")
    
}else if(username){
    res.send("username already exist")
}else{
  const addUser = new db(req.body)
  addUser.save((err,doc)=>{
    if(err) throw err
    res.send("user added successfully")
  })
}

})

//phonenumber verification

app.post("/passwordChange",async (req,res)=>{
    const isExist = await db.findOne({phonenumber:req.body.phonenumber})
    if(!isExist){
        res.send("invalid phonenumber pls provide registered phonenumber to change password")
    }else{
        db.findByIdAndUpdate({_id:isExist._id},req.body,{new:true},(err,doc)=>{
            if(err){return err}
            res.send("password changed successfully")
        })
    }

})


//login 
app.post("/login",async (req,res)=>{
    const username =  await db.findOne({username:req.body.username})
    const password =  await db.findOne({password:req.body.password})
    if(!username || !password){
        res.send("username or password is invalid")
    }else{
        res.send("login successfull")
    }
})

//delete user



app.listen(5000,()=>{
    console.log("server connected")
})
const express=require("express");
const mongoose=require("mongoose");
const url='mongodb://localhost/student'
const alienrouter=require("./Routes/aliens")
const app=express()
const port =9000;
mongoose.connect(url)
const con=mongoose.connection
app.use(express.json())

con.on('open',function(){
    console.log("connected to db")
})


app.use("/alien",alienrouter)


app.listen(port,()=>{
    console.log("connected",port)
})

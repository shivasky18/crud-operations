const express=require("express");
const mongoose=require("mongoose");
const url='mongodb://localhost:27020,localhost:27021,localhost:27022/cbit?replicaSet=m101'
const router=require("./Routes/connections")
const app=express()
const port =9000;
mongoose.connect(url)
const con=mongoose.connection
app.use(express.json())

con.on('open',function(){
    console.log("connected to database")
})


app.use("/connections",router)


app.listen(port,()=>{
    console.log("connected",port)
})

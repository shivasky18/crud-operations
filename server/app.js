const express=require("express");
const cors=require('cors');
const mongoose=require("mongoose");
const url='mongodb://localhost:27017/student'
const router=require("./Routes/connections")
const app=express()


app.use(cors());
const port =9000;
mongoose.connect(url)
const con=mongoose.connection
app.use(express.json())

con.on('open',function(){
    console.log("connected to database")
});
app.use("/connections",router)


app.listen(port,()=>{
    console.log("connected",port)
})

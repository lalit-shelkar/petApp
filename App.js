const express = require("express");
const route=require("./routes/petRouter");
const app=express();
const port=3000;
const data=require("./resources/petData");
app.use(express.json());
//app.use("/",route);
app.get("/",(req,res)=>{
    res.send("hehhehhe");
});
app.get("/petData",(req,res)=>{
     res.send(data);
 });

app.listen(port,()=>{
    console.log("App is running")
})

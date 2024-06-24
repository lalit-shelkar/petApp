const express = require("express");
const route=require("./routes/petRouter");
const app=express();
const port=3000;


app.use(express.json());
app.use("/api/v1",route);

app.listen(port,()=>{
    console.log("App is running")
})

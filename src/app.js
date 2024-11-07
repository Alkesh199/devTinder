const express = require("express");
// creating app using express
const app = express();

// using routes to handle diff- diff incoming request
app.use("/test",(req,res)=>{
    res.send("hello this is to handle /test");
})

app.use("/hello",(req,res)=>{
    res.send("handling /hello routes");
})
// handler functions, and sending response back
app.use((req,res)=>{
    res.send("welcome to dashboard");
})
// listning to the incoming request on port 7777
app.listen("7777",()=>{
    console.log("app is up and running on port 7777:");
});
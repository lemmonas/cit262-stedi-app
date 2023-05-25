const express = require("express");
const app = express();

app.get("/andra", (req, res)=>{
    res.send("Hello Andra!");
});

app.get("/", (req, res)=>{
    res.setHeader('content-type','text/plain');
    res.send("Welcome to my backend API!");
});

app.listen(3000, ()=>{
    console.log("Listening");
});
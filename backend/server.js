const express = require('express');
const app = express();

app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    console.log("Here");
   // res.send("Hi");

    res.render("index");
    //res.json({message: "hello"});
});

/*
app.get('/',logger,(req,res)=>{
    console.log("Here");
   // res.send("Hi");

    res.render("index");
    //res.json({message: "hello"});
});*/

const userRouter = require("./routes/users");
//const postRouter = require("/posts/posts");

app.use("/users",userRouter);
//app.use("/posts", postRouter);



app.listen(3000);
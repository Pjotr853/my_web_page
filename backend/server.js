const mongoose = require('mongoose');

const User= require("./models/Users");

mongoose.connect("mongodb://localhost/testdb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(e => {
    console.error("Connection error", e);
  });

run();
async function run(){
   // const user = new User({name:"Peter", age: 24});
   // await user.save();
    
   //const user = await User.create({name: "Peter", age: 24});
   try{
    const user = new User({
        name:"Peter",
        age: 24,
        hobbies:["kodovanie", "weby"],
        adress:{
            street:"Hlavna ulica",
            city: "Presov"
        }
        });
    
        //await user.save(); 
       // console.log(user);
    } catch(e){
        console.log(e.message);
    }
    
    try{
       // console.log("userFind");
        //const userFind = await User.find({name: "Peter"});
        //const deleteUser= await User.deleteOne({name: "Peter"});
        //const user = await User.where("name").equals("Peter");
        //const user = await User.where("name").equals("Peter");
        //const user = await User.findOne({ name: "Peter" });
        const user = await User.findByName("Peter");
        console.log(user);
        user.sayHi();
    } catch(e){
        console.log(e.message);
    }

   
}




//if (process.env.NODE_ENV !== 'production') {
  //  require('dotenv').load()
  //}
  
  //const express = require('express')
  //const app = express()
  //const expressLayouts = require('express-ejs-layouts')
  
  //const indexRouter = require('./routes/index')
  
  //app.set('view engine', 'ejs')
 // app.set('views', __dirname + '/views')
  //app.set('layout', 'layouts/layout')
  //app.use(expressLayouts)
  //app.use(express.static('public'))
  
 


  /*
  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'))
  
  app.use('/', indexRouter)
  
  app.listen(process.env.PORT || 3000)



app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
*/

/*
app.get('/',(req,res)=>{
    console.log("Here");
   // res.send("Hi");

    res.render("index");
    //res.json({message: "hello"});
});


//app.get('/',logger,(req,res)=>{
 //   console.log("Here");
   // res.send("Hi");

 //   res.render("index");
    //res.json({message: "hello"});
//});

const userRouter = require("./routes/users");
//const postRouter = require("/posts/posts");

app.use("/users",userRouter);
//app.use("/posts", postRouter);

*/


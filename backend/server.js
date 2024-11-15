const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

// Inicializácia aplikácie
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Pripojenie k MongoDB
mongoose.connect("mongodb://localhost/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error:", e);
  });

// Import a použitie routy pre tasks
app.use('/tasks', taskRoutes);

// Testovacia routa
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Spustenie servera
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/*
  app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.post('/tasks', async (req, res) => {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
    });
  
    try {
      const newTask = await task.save();
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

 

  app.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      await task.remove();
      res.json({ message: 'Task deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

*/

 /* app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
*/






/*

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

*/


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


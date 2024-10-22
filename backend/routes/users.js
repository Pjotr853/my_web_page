const express = require('express');
const router = express.Router(); 

router.use(logger);


router.get("/", (req, res) => {
    res.send("users");
});

router.get("/new", (req, res) => {
    res.send("users new form");
});

router.post("/",(req,res)=>{
    res.send("create users");
});


//tento get sluyi na to za ked zadam cestu napr http://localhost:3000/users/51  tak sa mi zobrazi sprava Get Users With ID 51
router.get("/:id",(req,res)=>{
   // req.params.id
    res.send(`Get Users With ID ${req.params.id}`);
});

router.put("/:id",(req,res)=>{
    // req.params.id
     res.send(`Put Users With ID ${req.params.id}`);
 });

 router.delete("/:id",(req,res)=>{
    // req.params.id
     res.send(`Delete Users With ID ${req.params.id}`);
 });

 const users =[{name: "peter"}, {name:"fero"}];

 router.param("id",(req,res, next, id)=>{
    req.users= users[id];
    next();
 })

 function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;  

const mongoose = require('mongoose');  

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
});


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        //lowercase: true
    },
    age:{
        type: Number,
        min: 0,
        max: 120 
    } ,
    email: String,
    createdAt:{
        type: Date,
        immutable: true,
        default: () => Date.now()
    } ,
    updateAt: {
        type: Date,
        default: () => Date.now()
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    adress: addressSchema
   /* adress: {
        street: String,
        city: String
    }*/
});


userSchema.methods.sayHi = function(){
    console.log(`Hi my name is ${this.name}`);
}

userSchema.statics.findByName = function(name){
    return this.where({name: new RegExp(name,'i')});
}

module.exports= mongoose.model("User", userSchema);
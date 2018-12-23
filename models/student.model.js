'use strict'
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/studentdb',{
    useMongoClient:true,
});
let Schema=mongoose.Schema;
let Studentschema=new Schema({
    Firstname:String,
    Lastname:String,
    Rollno:Number,
    Groupno:Number,
    Age:Number,
    Schoolname:String
});

let StudentModel=mongoose.model('student',Studentschema);
console.log('StudentModel',StudentModel);
module.exports=StudentModel;
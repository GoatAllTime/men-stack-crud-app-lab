const mongoose =require('mongoose')

const carsSchema= new mongoose.Schema({

name:{type:String, required:true},
description: { type: String, required: true },
image:{type:String},
model:{type:String},
year:{type:Number},
condition:{type:String,
    enum:['Used',"New"]}

},{timestamps:true})


const Cars=mongoose.model('Cars',carsSchema)

module.exports=Cars
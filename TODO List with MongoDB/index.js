//express included
const express = require('express');
const { truncateSync } = require('fs');
const path = require('path');
//running on port number 7000
const port = 7000;
//database connection
const db= require('./config/mongoose');
//mongoose schema
const Contact=require('./models/contact');

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList= []
//default page loading
app.get("/",function(req,res){
    // res.send('<h1>So it is working woohooo</h1>');
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error');
            return;
        }
        return res.render('home',{
            title: "TODO List",
            contact_list : contacts
        });
    });
});
//post request method to create a task
app.post("/create-contact",function(req,res){
    Contact.create({
        task: req.body.task,
        category: req.body.category,
        datee: req.body.datee,
        selected: false
    },function(err,newContact){
        if(err){
            console.log('Error in creating task');
            return;
        }
        console.log('******',newContact);
        return res.redirect('back');
    });
});
var arr=[];
var i=0;
// get method response for the delete button to delete the selected elements
app.get("/delete-contact/",function(req,res){
    for(var a=0;a<arr.length;a++)
    {
        if(arr[a]==0)
        {
            continue;
        }
        else{
    Contact.findByIdAndDelete(arr[a],function(err){
        if(err){
            console.log('error in deleting');
            return;
        }
        arr[a]=0;
    });}
    }
    return res.redirect('back');
});
//for anchor tag response, function created that adds element id to array and 
//updates the selected parameter in database
app.get("/select-task/",function(req,res){
    let id= req.query.id;
    for(var k=0;k<arr.length;k++)
    {
    if(arr[k]==id)
    {
    Contact.findByIdAndUpdate(id,{$set: {'selected': false}}, 
    {new: true},
    function(err,user){
        if(err){
            res.json({error :err}) ; 
        }
    });
    
    arr[k]=0;
    return res.redirect('back');
    }
    }
    arr[i]=id;
    i++;
    console.log(arr);
    //to update the parameter of schema
    Contact.findByIdAndUpdate(id,{$set: {'selected': true}}, 
    {new: true},
    function(err,user){
        if(err){
            res.json({error :err}) ; 
        }
    });
    return res.redirect('back');
});
app.listen(port, function(err){
    if(err){
        console.log("Error occured",err);
    }
    console.log('Running on port: ',port);
});

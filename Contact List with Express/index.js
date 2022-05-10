const express = require('express');
const path = require('path');
const port = 7000;

const db= require('./config/mongoose');
const Contact=require('./models/contact');

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList= [
    {
        name: 'Aditya',
        phone: '9891888897'
    },
    {
        name: 'Arora',
        phone: '1234567890'
    }
]

app.get("/",function(req,res){
    // res.send('<h1>So it is working woohooo</h1>');
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error');
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_list : contacts
        });
    });
});
app.post("/create-contact",function(req,res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    // contactList.push(req.body);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    },function(err,newContact){
        if(err){
            console.log('Error in creating contact');
            return;
        }
        console.log('******',newContact);
        return res.redirect('back');
    });
    // return res.redirect('/');
});
app.get("/delete-contact/",function(req,res){
    // let phone=req.query.phone;
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    // if(contactIndex != -1){
    //     contactList.splice(contactIndex,1);
    // }
    // return res.redirect('back');
    let id= req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting');
            return;
        }
        return res.redirect('back');
    });
});
app.listen(port, function(err){
    if(err){
        console.log("Error occured",err);
    }
    console.log('Running on port: ',port);
});

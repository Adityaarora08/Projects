// mongoose included
const mongoose = require('mongoose');
// task schema created in database
const contactSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    datee:{
        type: Date,
        required:true
    },
    selected:{
        type: Boolean
    }
});

const Contact=mongoose.model('Contact',contactSchema);
module.exports = Contact;
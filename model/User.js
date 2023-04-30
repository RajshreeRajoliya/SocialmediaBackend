

import mongoose from require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
name : {
    type : String,
    required : true,
},

email : {
    type : String,
    required : true,
},

password : {
    type : String,
    required : true,
},

dob : {
    type : Date,
    required : true,
},

bio : {
    type : Date,
    required : true,
},

})

export default mongoose.model('User', userSchema);

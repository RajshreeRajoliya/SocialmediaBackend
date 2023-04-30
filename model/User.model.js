

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
name : {
    type : String,
    required : true,
},

email : {
    type : String,
    required : true,
    unique : true,
},

password : {
    type : String,
    required : true,
    
},

dob : {
    type : Date,
   
},

bio : {
    type : Date,
  
},

})

const User = mongoose.model('User', userSchema);
export default User; 

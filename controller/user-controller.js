
import User from "../model/User.model.js";

export const getAllUsers = async(req , res , next)=>{
let users;
try{ 
    users = await User.find();
} catch(err) {
console.log("Error: " + err)
}
if(!users){
    return res.status(404).json({message : "User not found"});
} else {
    return res.status(200).json({users});
}
}

export const registerUsers = async(req , res , next)=>{
    const{name , email , password , dob , bio} = req.body;
    let existinguser;
    try{
   existinguser = await User.findOne({email});
    } catch(err) {
  return console.log(err);
    }
if(existinguser){
return res.status(400).json({message: "Already user existing"})
} 
const user = new User({name , email , password , dob , bio});
try{
await user.save();
} catch(err) {
console.log(err);
}
return res.status(201).json({user})
}
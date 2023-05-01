
import Post from "../model/Post.model.js";

export const getAllposts =async(req , res , next)=>{
let posts;
try{
posts = await Post.find();
} catch (err) {
console.log(err.message);
}
if(!posts){
    return res.status(404).json({message:"Posts not found"});
} 
return res.status(200).json({posts});
}


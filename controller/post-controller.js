
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

export const postAllposts = async(req , res , next)=>{
    const{text , image , createdAt} = req.body;

    const post = new Post ({
        text ,
        image ,
        createdAt
    });
    try {
    await post.save(); 
    } catch(err) {
        console.log("Error: " + err)
    }
    if(post){
        return res.status(200).json({message :"Posted Successfully"});
    }
    
}

export const updatePost = async(req , res , next) => {
    const{text , image , createdAt} = req.body;
    const id = req.params.id;
    
   let posts;
    try{
      posts =  await Post.findByIdAndUpdate(id , {
        text ,
        image , 
        createdAt
      })
    

    } catch (err) {
      return console.log(err)
    }
    if(!posts){
        return res.status(404).json({message : "Unable to Update"})
    }
    return res.status(200).json({message : "Updated post successfully"})
}

export const deletePost = async(req , res , next)=>{
    const id = req.params.id;
    let post;
    try{
    post = await Post.findByIdAndRemove(id);

    } catch (err) {
    console.log("error deleting post")
    }
    if(!post){
    return res.status(500).json({message: "No post found"})
    } 
    return res.status(200).json({message : "Delete post successfully"});
}
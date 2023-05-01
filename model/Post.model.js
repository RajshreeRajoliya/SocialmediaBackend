// {
//    
//     text: String,
//     image: String,
//     createdAt: Date,
//    
//   }


import mongoose from 'mongoose';

const postSchema = new mongoose.Schema ({

    text : {
        type : String,
        required : true,
    } ,

    image : {
        type : String,
        required : true,
    },

    createdAt : {
        type : Date,
        required : true,
    },
    
});

const Post = mongoose.model('Post' , postSchema);

export default Post;
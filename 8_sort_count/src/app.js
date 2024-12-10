const mongoose = require('mongoose');

//connection creation and creating new db
mongoose.connect("mongodb://127.0.0.1:27017/amanbase")
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.error("Could not connect to MongoDB:", err));

//schema
const playlistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// //logical operator (count)
// const getDocument = async () =>{
//     try{
//         const result =  await Playlist
//         .find({author: "aman"})
//         .select({name:1})   
//         .countDocuments();
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
//  }
//  getDocument();
// __________________


// //logical operator (sort ascending)
// const getDocument = async () =>{
//     try{
//         const result =  await Playlist
//         .find({author: "aman"})
//         .select({name:1})   
//         .sort({ name: 1 });
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
//  }
//  getDocument();
// __________



//logical operator (sort ascending)
const getDocument = async () =>{
    try{
        const result =  await Playlist
        .find({author: "aman"})
        .select({name:1})   
        .sort({ name: -1 });
        console.log(result);
    }catch(error){
        console.log(error);
    }
 }
 getDocument();




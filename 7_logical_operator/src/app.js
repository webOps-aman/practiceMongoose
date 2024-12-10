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

// //comparison_operator
// const getDocument = async () =>{
//     try{
//         const result =  await Playlist
//         .find({videos: 50})
//         .select({name:1})
//         // .limit(1);
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
//  }
//  getDocument();
// _____________


// //comparison_operator (greater than)
// const getDocument = async () =>{
//     try{
//         const result =  await Playlist
//         .find({videos: {$gt: 50}})
//         .select({name:1})
//         // .limit(1);
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
//  }
//  getDocument();
// _________________



// //logical operator (or)
// const getDocument = async () =>{
//     try{
//         const result =  await Playlist
//         .find({$or: [{ctype: "Back End"}, 
//             {author: "aman"}
//         ]})
//         .select({name:1})   
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
//  }
//  getDocument();
// __________



//logical operator (and)
const getDocument = async () =>{
    try{
        const result =  await Playlist
        .find({$and: [{ctype: "Back End"}, 
            {author: "aman"}
        ]})
        .select({name:1})   
        console.log(result);
    }catch(error){
        console.log(error);
    }
 }
 getDocument();




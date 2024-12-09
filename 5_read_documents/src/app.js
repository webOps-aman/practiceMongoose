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

// //read document
// const getDocument = async () =>{
//    const result =  await Playlist.find();
//    console.log(result);
// }
// getDocument();
// ______________


// //read document
// const getDocument = async () =>{
//     const result =  await Playlist.find({ctype: 'Front End'});
//     console.log(result);
//  }
//  getDocument();
// _______________



// //read document
// const getDocument = async () =>{
//     const result =  await Playlist.find({ctype: 'Front End'})
//     .select({name:1});
//     console.log(result);
//  }
//  getDocument();
// ________________



// //read document
// const getDocument = async () =>{
//     const result =  await Playlist.find({ctype: 'Front End'})
//     .select({name:1})
//     .limit(1);
//     console.log(result);
//  }
//  getDocument();
// ________________



//read document
const getDocument = async () =>{
    try{
        const result =  await Playlist.find({ctype: 'Front End'})
        .select({name:1})
        .limit(1);
        console.log(result);
    }catch(error){
        console.log(error);
    }
 }
 getDocument();
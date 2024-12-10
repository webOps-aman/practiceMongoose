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

//  //updateDocument
// const updateDocument = async (_id) =>{
//     try{
//         const result = await Playlist.updateOne({_id}, {
//             $set: {
//                 name: "Javascript"
//             }
//         });
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

//  updateDocument("675721924cec75973f1c108d");
// ______________



// //updateDocument
// const updateDocument = async (_id) =>{
//     try{
//         const result = await Playlist.findByIdAndUpdate({_id}, {
//             $set: {
//                 name: "Javascript Aman"
//             }
//         });
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

//  updateDocument("675721924cec75973f1c108d");
// __________



// //updateDocument
// const updateDocument = async (_id) =>{
//     try{
//         const result = await Playlist.findByIdAndUpdate({_id}, {
//             $set: {
//                 name: "Javascript Aman"
//             }
//         }, {
//             useFindAndModify: false
//         });
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

//  updateDocument("675721924cec75973f1c108d");
// _________



//updateDocument
const updateDocument = async (_id) =>{
    try{
        const result = await Playlist.findByIdAndUpdate({_id}, {
            $set: {
                name: "Javascript Aman hey"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

 updateDocument("675721924cec75973f1c108d");
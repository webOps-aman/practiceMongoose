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

// //deleteDocument
// const deleteDocument = async (_id) =>{
//     try{
//         const result = await Playlist.deleteOne({_id});
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }
   
// deleteDocument("6757e50567b24b4bfc0e812f");
// __________



//deleteDocument
const deleteDocument = async (_id) =>{
    try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
   
deleteDocument("6757e81167b24b4bfc0e8130");
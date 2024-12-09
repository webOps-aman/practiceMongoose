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

// //create document or insert
// const reactPlaylist = new Playlist({

//     name: "React JS",
//     ctype: "Front End",
//     videos: 80,
//     author: "aman",
//     active: true
    
// });

// reactPlaylist.save();
// _______________




//create document or insert

const createDocument = async () => {
    try{
        const reactPlaylist = new Playlist({

            name: "Node JS",
            ctype: "Back End",
            videos: 50,
            author: "aman",
            active: true
            
        });
        
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
createDocument();

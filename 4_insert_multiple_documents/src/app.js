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

//create document or insert
const createDocument = async () => {
    try{
        const jsPlaylist = new Playlist({

            name: "javascript",
            ctype: "Front End",
            videos: 150,
            author: "aman",
            active: true
        })

        const mongoPlaylist = new Playlist({

            name: "MongoDB",
            ctype: "Database",
            videos: 10,
            author: "aman",
            active: true
        })

        const mongoosePlaylist = new Playlist({

            name: "Mongoose JS",
            ctype: "Database",
            videos: 4,
            author: "aman",
            active: true
        })

        const expressPlaylist = new Playlist({

            name: "Express JS",
            ctype: "Back End",
            videos: 20,
            author: "aman",
            active: true
        })
        
        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist]);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
createDocument();

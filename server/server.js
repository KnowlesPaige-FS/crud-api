const http = require("http");
const app = require("./app/app"); 
require("dotenv").config();

const mongoose = require('mongoose');
const port = process.env.PORT; 

if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined.");
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("MongoDB connected...");
    http.createServer(app).listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch(err => {
    console.error("MongoDB connection error:", err.message);
});


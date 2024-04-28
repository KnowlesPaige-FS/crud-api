const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const moviesRouter = require("../app/api/routes/movies");
const cors = require("cors");
const path = require("path");
require('dotenv').config();


app.use(morgan("dev"));

// app.use(cors());
app.use(cors({
    origin: 'https://flickfiction-598c32e758ed.herokuapp.com'
  }));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    }
    next();
});

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Service is up",
    });
});

app.use("/v1/app/movies", moviesRouter);

app.use(express.static(path.join(__dirname, '../../app/app/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/app/build', 'index.html'));
});


app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});

mongoose.connect(process.env.MONGO_URI, {

})
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
    });

    

module.exports = app;

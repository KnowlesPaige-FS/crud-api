const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const moviesRouter = require("../app/api/routes/movies");
const cors = require("cors");
require('dotenv').config();

app.use(morgan("dev"));

app.use(cors());

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

app.use("/movies", moviesRouter);

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
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
    });

module.exports = app;

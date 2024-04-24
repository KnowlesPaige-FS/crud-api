const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const moviesRouter = require("../app/api/routes/movies");
const cors = require("cors");
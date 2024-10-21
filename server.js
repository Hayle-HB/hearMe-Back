require("dotenv").config();
require('./config/mogoDB.js');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// imported routes

const postRoutes = require("./routes/postRoutes.js");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api", postRoutes);

// Start the server
app.listen(1000, () => {
  console.log("Server is running at port 1000");
});

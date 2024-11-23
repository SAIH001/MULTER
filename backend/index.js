const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const ConnectionDB = require("./Config/DB")


const cors = require("cors");


app.use(cors())



// Importing Controllers
const { getRegisterPage, createRegistration } = require("./Controllers/UserController");

// Importing Image Upload Middleware
const { ImageLayer } = require("./Middlewares/UploadImage");
const upload = ImageLayer();



// Middleware to serve static files like images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route Definitions
app.route("/")
  .get(getRegisterPage)
  .post(upload.single("userimage"), createRegistration);

// Server Setup
app.listen(process.env.PORT, () => {
    ConnectionDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});

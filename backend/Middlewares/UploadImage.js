const multer = require("multer");
const path = require("path");

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save uploaded files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Make sure filenames are unique
  },
});

// Initialize multer with the storage configuration
const ImageLayer = () => multer({ storage: storage });

module.exports = { ImageLayer };

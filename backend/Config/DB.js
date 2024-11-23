const mongoose = require("mongoose");

const ConnectionDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = ConnectionDB;

const mongoose = require("mongoose");

// Define the schema
const userRegistrationSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters"],
      trim: true,
    },
    useremail: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      
    },
    userpassword: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    userimage: {
      type: String
      
    }
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);


// Export the model
const UserRegistration = mongoose.model("User", userRegistrationSchema);

module.exports = UserRegistration;

const bcrypt = require("bcryptjs");
const User = require("../Model/UserRegistration"); // Import your User model

// Method GET 
// API http://localhost:5000/
function getRegisterPage(req, res) {
  return res.render("Registration");
}

// Method POST 
// API http://localhost:5000/
async function createRegistration(req, res) {
  try {
    console.log(req)
    const { username, useremail, userpassword } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ useremail });
    if (existingUser) {
      return res.status(400).send("Email already exists!");
    }

    // File upload handling (ensure `req.file` is available)
    const userImage = req.file ? req.file.path : null; // Optional image field

    // Password hashing
    const hashedPassword = await bcrypt.hash(userpassword, 10);

    const newUserData = new User({
      username,
      useremail,
      userpassword: hashedPassword,
      userimage: userImage,
    });

    // Save the user in the MongoDB database
    await newUserData.save();

    // You can also make an external API call here if needed
    // const Response = await fetch("https://your-api-url", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newUserData),
    // });

    return res.status(201).send({"message":"User Registered Successfully!"});
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).send("Server Error, please try again.");
  }
}

module.exports = {
  getRegisterPage,
  createRegistration,
};

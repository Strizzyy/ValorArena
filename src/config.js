const mongoose = require('mongoose');
require('dotenv').config();

// Use the environment variable for the MongoDB URI
const uri = "mongodb+srv://yuogamer34:bwZMCcT7AIFck3Jj@cluster0.gogpppa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Database Connected Successfully");
})
.catch((err) => {
  console.log("Database cannot be Connected:", err);
});

// Define Schema
const Loginschema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
    unique: true
  
  },
  name : {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },

});

// Create Model for 'user' collection
const User = mongoose.model("User", Loginschema);

module.exports = User;

require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.SERVER_MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to Mongoose");
    } catch (e) {
        console.log(e);
    }
};

module.exports = { connectDB };

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastModified: {
        type: Date,
        default: Date.now,
    },
    imagePath: {
        type: [String],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    sharedWith: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    important: {
        type: Boolean,
        default: false,
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};

let Note = mongoose.model("Note", noteSchema);
let User = mongoose.model("User", userSchema);
module.exports = { Note, User };

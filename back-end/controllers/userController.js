const { User } = require("../model/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userController = {
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            console.log(username, password);
            const user = await User.findOne({ username });

            if (!user || !(await user.comparePassword(password))) {
                console.log(user);
                return res.status(401).json({ message: "Tên người dùng hoặc mật khẩu không đúng" });
            }
            const token = jwt.sign({ userId: user._id }, "your-secret-key", { expiresIn: "1h" });

            res.status(200).json({ token });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    registerUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getUserByEmail: async (req, res) => {
        try {
            const email = req.params.email;
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ message: "Không tìm thấy người dùng." });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: "Đã xảy ra lỗi khi lấy người dùng." });
        }
    },
    getUserByToken: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;
            const user = await User.findOne({ _id: userId });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(err);
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findOne({ _id: id });
            if (!user) {
                return res.status(404).json({ message: "Không tìm user này." });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: "Đã xảy ra lỗi khi lấy note" });
        }
    },
};

module.exports = userController;

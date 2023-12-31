const { Note, User } = require("../model/model");
const jwt = require("jsonwebtoken");
const noteController = {
    addNote: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            if (!userId) {
                return res.status(401).json({ message: "Bạn cần đăng nhập để thêm ghi chú." });
            }

            const newNote = new Note({ ...req.body, createdBy: userId });
            const saveNote = await newNote.save();
            res.status(200).json(saveNote);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Đã xảy ra lỗi khi thêm ghi chú." });
        }
    },
    getAllNotes: async (req, res) => {
        try {
            const notes = await Note.find();
            res.status(200).json(notes);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getNotesByLoggedInUser: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            const userExists = User.exists({ _id: userId });
            if (!userExists) {
                return res.status(404).json({ message: "Người dùng không tồn tại." });
            }
            const notes = await Note.find({ createdBy: userId });
            res.status(200).json(notes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách ghi chú." });
        }
    },
    shareNote: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            const { noteId, shareWithUserId } = req.body;

            const userShareExists = await User.exists({ _id: shareWithUserId });
            if (!userShareExists) {
                return res.status(404).json({ message: "Người được chia sẽ không tồn tại" });
            }

            const userExists = await User.exists({ _id: userId });
            if (!userExists) {
                return res.status(404).json({ message: "Người dùng không tồn tại." });
            }

            const note = await Note.findOne({ _id: noteId, createdBy: userId });

            if (!note) {
                return res
                    .status(404)
                    .json({ message: "Ghi chú không tồn tại hoặc không thuộc về bạn." });
            }

            if (!note.sharedWith.includes(shareWithUserId)) {
                note.sharedWith.push(shareWithUserId);
                await note.save();
            }
            res.status(200).json({ message: "Chia sẻ thành công." });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Đã xảy ra lỗi khi chia sẻ ghi chú." });
        }
    },
};

module.exports = noteController;

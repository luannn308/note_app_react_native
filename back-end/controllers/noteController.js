const { Note, User } = require("../model/model");
const jwt = require("jsonwebtoken");
const noteController = {
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const note = await Note.findOne({ _id: id });
            if (!note) {
                return res.status(404).json({ message: "Không tìm note này." });
            }
            res.status(200).json(note);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: "Đã xảy ra lỗi khi lấy note" });
        }
    },
    addNote: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            if (!userId) {
                return res.status(401).json({ message: "Bạn cần đăng nhập để thêm ghi chú." });
            }
            console.log(req.body);
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
    editNote: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            const { noteId, title, content, imagePath, sharedWith, important } = req.body;

            const userExists = await User.exists({ _id: userId });
            console.log(userExists);
            if (!userExists) {
                return res.status(404).json({ message: "Người dùng không tồn tại." });
            }
            console.log({ _id: noteId, createdBy: userId });
            const note = await Note.findOne({ _id: noteId, createdBy: userId });

            if (!note) {
                return res
                    .status(404)
                    .json({ message: "Ghi chú không tồn tại hoặc không thuộc về bạn." });
            }

            note.title = title;
            note.content = content;
            note.imagePath = imagePath;
            note.important = important;
            note.sharedWith = [...sharedWith];
            note.lastModified = Date.now();

            const updatedNote = await note.save();

            res.status(200).json(updatedNote);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Đã xảy ra lỗi khi chỉnh sửa ghi chú." });
        }
    },
    getSharedNotesByLoggedInUser: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            const userExists = await User.exists({ _id: userId });
            if (!userExists) {
                return res.status(404).json({ message: "Người dùng không tồn tại." });
            }
            const sharedNotes = await Note.find({ sharedWith: userId });

            res.status(200).json(sharedNotes);
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Đã xảy ra lỗi khi lấy danh sách ghi chú được chia sẻ.",
            });
        }
    },
    deleteNote: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            const noteId = req.params.id;

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
            await Note.deleteOne({ _id: noteId });
            res.status(200).json({ message: "Xoá ghi chú thành công." });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Đã xảy ra lỗi khi xoá ghi chú." });
        }
    },
    searchNotes: async (req, res) => {
        try {
            const token = req.header("Authorization").replace("Bearer ", "");
            const decoded = jwt.verify(token, "your-secret-key");
            const userId = decoded.userId;

            const userExists = await User.exists({ _id: userId });
            if (!userExists) {
                return res.status(404).json({ message: "Người dùng không tồn tại." });
            }

            const { query } = req.params;

            const notes = await Note.find({
                createdBy: userId,
                title: { $regex: new RegExp(query, "i") }, // Case-insensitive search
            });

            res.status(200).json(notes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Đã xảy ra lỗi khi tìm kiếm ghi chú." });
        }
    },
};

module.exports = noteController;

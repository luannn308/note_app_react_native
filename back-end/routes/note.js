const noteController = require("../controllers/noteController");

const router = require("express").Router();

// ADD USER
router.post("/", noteController.addNote);

router.get("/", noteController.getAllNotes);

router.get("/user", noteController.getNotesByLoggedInUser);

router.post("/share", noteController.shareNote);
module.exports = router;

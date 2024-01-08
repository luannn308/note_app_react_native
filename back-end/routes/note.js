const noteController = require("../controllers/noteController");

const router = require("express").Router();

// ADD USER
router.post("/", noteController.addNote);

router.get("/", noteController.getAllNotes);

router.get("/user", noteController.getNotesByLoggedInUser);

router.get("/share/list", noteController.getSharedNotesByLoggedInUser);

router.post("/share", noteController.shareNote);

router.post("/edit", noteController.editNote);

router.get("/:id", noteController.getById);

router.delete("/:id", noteController.deleteNote);

router.get("/search/:query", noteController.searchNotes);

module.exports = router;

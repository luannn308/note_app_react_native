const userController = require("../controllers/userController");

const router = require("express").Router();

// ADD USER
router.post("/login", userController.loginUser);
router.post("/", userController.registerUser);

router.get("/", userController.getAllUsers);
router.get("/:email", userController.getUserByEmail);

module.exports = router;

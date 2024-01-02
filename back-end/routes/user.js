const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", userController.loginUser);
router.post("/", userController.registerUser);

router.get("/", userController.getAllUsers);
router.get("/detail", userController.getUserByToken);
router.get("/:email", userController.getUserByEmail);

module.exports = router;

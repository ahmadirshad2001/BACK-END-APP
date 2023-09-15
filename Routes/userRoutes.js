const express = require("express");
const {
  getAllUsers,
  saveUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} = require("./../controllers/users.Controller");



const router = express.Router();

router.get("/", getAllUsers);
router.post("/", saveUser);
router.post("/login", loginUser);
// router.get("/:userId", getUserById);
router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;

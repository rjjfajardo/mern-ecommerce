import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUser,
  getUsers,
  deleteUser,
  getUserByID,
  updateUsersProfile,
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, isAdmin, getUsers);
router.post("/login", authUser);

router.route("/profile").get(getUserProfile).put(protect, updateUser);

router
  .route("/:id")
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserByID)
  .put(isAdmin, updateUsersProfile);

export default router;

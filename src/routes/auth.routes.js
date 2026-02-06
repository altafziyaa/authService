import express from "express";
import authController from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.Middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

const router = express.Router();

router.post("/signup", authController.createUser);
router.post("/login", authController.signIn);

router.post("/logout", authMiddleware, authController.signOut);

router.get("/me", authMiddleware, authController.getMyProfile);
router.put("/me", authMiddleware, authController.updateProfile);
router.delete("/me", authMiddleware, authController.deleteUser);

router.get(
  "/users",
  authMiddleware,
  allowRoles("admin"),
  authController.getAllProfiles,
);

router.get("/users", authMiddleware, authController.getAllProfiles);

export default router;

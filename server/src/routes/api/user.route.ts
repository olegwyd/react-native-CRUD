import { Router } from "express";

import userController from "../../controllers/user.controller";
import validateBody from "../../middleware/user.validator.middleware";
import isExist from "../../middleware/isUserExist.middleware";

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  "/registration",
  validateBody,
  isExist,
  userController.createUser.bind(userController)
);
router.post("/", userController.getUser.bind(userController));

export default router;

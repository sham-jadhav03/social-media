const express = require("express");
const followRouter = express.Router();
const identifyUser = require("../middleware/auth.middleware");
const followController = require("../controllers/follow.controller");

/**
 * @route POST /api/users/follow/:username
 * @description Follow a user
 * @access Private
 */
followRouter.post(
  "/follow/:username",
  identifyUser,
  followController.followUserController,
);

/**
 * @route POST api/users/unfollow/:username
 * @description Followee a user
 * @access Private
 */
followRouter.post(
  "/unfollow/:username",
  identifyUser,
  followController.unFollowUserController,
);

module.exports = followRouter;

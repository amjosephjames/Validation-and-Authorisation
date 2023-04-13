const express = require("express");
const router = express.Router();
const { isSignedIn } = require("../userAuthorization");
const {
  createUser,
  signInUser,
  getUsers,
  testPage,
} = require("../controller/userController.js");

router.route("/register").post(createUser);
router.route("/login").post(signInUser);
router.route("/").get(getUsers);

router.route("/private", isSignedIn).get(testPage);

module.exports = router;

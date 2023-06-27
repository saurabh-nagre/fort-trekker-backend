const express = require("express");
const { loginWithGoogle } = require("../controller/auth");

const authRouter = express.Router();

authRouter.post("/google_signin",loginWithGoogle);

module.exports = authRouter;

const express = require("express");
const router = require("express");
const { userServices } = require("../service/userService");
const { UsersSchema } = require("../modal/Userschema");

const loginRoute = router();

loginRoute.post("/login", async (request, response) => {
  try {
    const { userName, password } = request.body;

    const userExist = await userServices({ userName });
    if (userExist) {
      if (password === userExist.password) {
        return response.status(200).json({ status: "success", message: "successfully login" });
      } else {
        return response.status(200).json({ status: "failed", message: "password did not match" });
      }
    } else {
      return response.status(400).json({ status: "failed", message: "User Not Found" });
    }
  } catch (error) {
    return response.status(400).json({ status: "failed", message: "server error" });
  }
});

//------------------------------------------------------------------------------------------------
loginRoute.post("/register", async (request, response) => {
  try {
    const { userName, password, name, mobileNumber } = request.body;
    const user = {
      userName,
      password,
      name,
      mobileNumber,
    };

    const userExist = await userServices({ userName: userName });
    if (userExist) {
      return response.status(400).json({ status: "failed", message: "User already exist" });
    }
    const users = UsersSchema.create(user);
    return response.status(200).json({ status: "success", message: "successfully login", user });
  } catch (error) {
    return response.status(400).json({ status: "failed", message: "server error" });
  }
});

module.exports = { loginRoute };

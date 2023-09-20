const express = require("express");
const  router=require("express");


const { loginRoute } = require("../Controller/login");

const routeController = router();

routeController.use("/user", loginRoute)

module.exports = { routeController };
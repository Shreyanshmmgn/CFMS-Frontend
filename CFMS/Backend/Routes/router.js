const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const signUpTemplate = require("../Models/signUpModel");

router.get("/", (req, res) => {
  res.send("Routing workss!! lets get started");
});
router.post("/signup", (req, res) => {
  console.log("accepted !");
  const { fullName, email, password } = req.body;
  console.log(fullName);
  // if (fullName && email && password) {
  const signedUpUser = new signUpTemplate({
    fullName: fullName,
    email: email,
    password: password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // }
  // else {
  //   res.send("Incopmplete info!!!");
  // }
});

module.exports = router;

const express = require("express")
const cors = require("cors")
const User = require("./models/User")
const Travelog = require("./models/Travelog")

const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/TravelogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

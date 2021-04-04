const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routerPath = require("./Routes/router");
const cors = require("cors");
dotenv.config();
const app = express();

mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database coneected!");
  }
);
app.use(cors());
app.use(express.json());
app.use(("/", routerPath));

app.listen(5000, () => console.log("                    Server is running!"));

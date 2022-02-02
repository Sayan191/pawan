const mongoose = require("mongoose");
require("dotenv").config();
var bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const authRoute = require("./Routes/auth");

const db = "mongodb://127.0.0.1:27017";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED....");
  })
  .catch((err) => {
    console.log("FAILED.....", err);
  });
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());


app.use("/api",authRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is UP>......", PORT);
});
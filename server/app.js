const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const probeRoutes = require("./routes/probe");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/probe", probeRoutes)

app.listen(8888, () => {
  console.log("listening at 8888");
});

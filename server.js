const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")
const apiRoutes = require("./routes/APIRoutes")
const PORT = process.env.PORT || 3000

const app = express();
const htmlRoutes = require("./routes/htmlRoutes")


app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/searchApiTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
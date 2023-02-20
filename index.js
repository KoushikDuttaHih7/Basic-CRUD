const express = require("express");
const dotenv = require("dotenv").config();
const textRoutes = require("./routes/textRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/texts", textRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

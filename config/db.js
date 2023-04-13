const mongoose = require("mongoose");
const url = "mongodb://localhost/valAuthDB";
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

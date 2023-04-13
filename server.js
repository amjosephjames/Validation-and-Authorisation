require("./config/db");
const express = require("express");
const port = 1010;

const studentRouter = require("./router/studentRouter");
const userRouter = require("./router/userRouter");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/student", studentRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});

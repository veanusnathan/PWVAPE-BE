const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const { userRouter } = require("./router");

app.use(cors());

app.use("/user", userRouter);

app.listen(5010, () => {
	return console.log("Connected to port 5010");
});

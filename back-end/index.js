const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./Database");
var bodyParser = require("body-parser");
const morgan = require("morgan");

const userRouter = require("./routes/user");
const noteRouter = require("./routes/note");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/user", userRouter);
app.use("/note", noteRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();

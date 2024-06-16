const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

// routes =>

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/message", require("./routes/message"));
app.use("/auth", require("./routes/auth"));
app.use("/setA", require("./routes/setA"));
app.use("/getcontacts", require("./routes/getc"));

app.get("/", (req, res) => {
  res.send("The Site is Live for chat app");
});

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}  for chat app`)
);
connectToMongo();

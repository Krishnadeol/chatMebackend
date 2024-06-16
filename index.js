const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

// routes =>

const corsOptions = {
  origin: "https://chatmefrontend.onrender.com",
  optionsSuccessStatus: 200,
};

const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // you wiil find the collextion at this route

app.use(router);

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

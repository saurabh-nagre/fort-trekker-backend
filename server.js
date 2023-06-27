const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require('cors');

// load config
const connectDb = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());
app.use(cors());

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

connectDb();

const port = process.env.PORT || 3000;

// middleware to verify token

app.use("/", require("./router/"));
app.use("/auth", require("./router/auth"));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

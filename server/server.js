const express = require("express");
const path = require("path"); // allows to dynamically build when we call it from current directory to where we actually go
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

// APP
const app = express();

// Database Configuration
mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
  })
  .then(() => console.log("Database Connected."));
mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// Middleware
app.use(morgan("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

// Routes middleware

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

// Execute
const port = process.env.PORT || 8000;
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server listening at http://localhost:${port}`);
});

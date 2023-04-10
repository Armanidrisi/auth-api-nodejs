const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./routes/auth");
const connectToMongo = require("./db");

const app = express();
const PORT = 3000;

connectToMongo()

app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log("Running On 3000");
});

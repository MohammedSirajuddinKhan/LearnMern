const express = require("express"); 
const app = express();
const port = 3000;

// app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
  res.send("Hello World! This is my first Express.js server"); 
});

app.get("/siraj", (req, res) => {
  res.render("express.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

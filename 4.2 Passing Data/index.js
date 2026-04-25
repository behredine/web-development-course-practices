import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",
    { notice: "Enter your name below" }
  )
});

app.post("/submit", (req, res) => {
  let firstN = req.body["fName"];
  let lastN = req.body["lName"];
  console.log(firstN)
  let count = firstN.length + lastN.length;
  res.render("index.ejs",
    { notice: `There are ${count} letters in your name!` }
  )
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

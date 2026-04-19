import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

var bandName = ""

function bandNameGenerator(req, res, next) {
  console.log(req.body)
  bandName = req.body["street"] + req.body["pet"];
  next()
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html")
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send(`<h1>your brand name is</h1><h2>${bandName}</h2>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

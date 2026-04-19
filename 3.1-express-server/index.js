import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("i'm back to coding this is the second time i am learning express js");
});
app.get("/about", (req, res) => {
    res.send("<h1>about me</h1><p>i am a web developer and i am learning express js</p>");

});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1><p>you can contact me when i finish this course and make my own portfolio website insha'Allah</p>");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
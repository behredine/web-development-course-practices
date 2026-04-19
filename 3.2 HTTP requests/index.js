import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("i'm back to coding this is the second time i am learning express js");
    console.log(req.method)
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
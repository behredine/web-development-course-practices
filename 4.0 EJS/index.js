import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;







app.get("/", (req, res) => {
    let today = new Date("April 26, 2026 11:34:00");
    let day = today.getDay();
    console.log(day)

    let type = "a weekday";
    let adv = "it is a time to work hard !"
    // i have learned something form the bug i get here that is instead of changing one variable 
    // at one place it is better to refactor it if there is a code below and above that can be affected by the change of the name

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it is a time to have some fun !";
    }



    res.render("index.ejs",
        {
            daytype: type,
            advice: adv,
        }
    )

})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})

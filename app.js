const express = require("express");
const bodyParser = require("body-parser");
const popup = require('node-popup');


const app = express();
let items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    // var today = new Date();


    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let day = today.toLocaleDateString('en-US', options);



    res.render("list", { kindofday: day, newitem: items });

})

app.post("/", function (req, res) {
    let item = req.body.text;
    if (item==="pop"||item==="Pop"||item==="POP") {
        items.pop();
       
    }
    else if (item==="Clean"||item==="clean"||item==="CLEAN") {
        items=[];
    }
    else  {
        items.push(item);
       
    }
    
    
   
   
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at port 3000");
})
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
let day = "";
let items = [];

app.get("/",(req,res) => {
  let today = new Date();
  let currentDay = today.getDay();

  // if(currentDay === 0 || currentDay === 6) {
  //   day = "weekend";
  // } else {
  //   day = "weekday";
  // }

var options = {
  weekday : "long" ,
   day : "numeric",
   month : "long"
}

day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay : day, newListItems : items});
});

app.post("/",function (req,res) {
  let newItem = req.body.newItem;
  items.push(newItem);
  res.redirect("/");
});

app.listen(2000, () => {
  console.log("Server 2000 is working");
});

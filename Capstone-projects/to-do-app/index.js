import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
var tArray = [];
var wArray=[];
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  var loc ="/"
  const data={addr:loc, array:tArray}
  res.render("index.ejs",{data});


  app.post("/", (req, res) => {
  var userData = req.body.txt;

  tArray.push(userData);
 
  const data = { array: tArray };
  res.render("index.ejs", { data });
});
});


app.get("/work", (req,res)=>{
  var loc="/work"
  const data={addr:loc,array: wArray}
  res.render("index.ejs",{data});

  
  app.post("/work", (req, res) => {
    var userData = req.body.txt;
  
    wArray.push(userData);
   
    const data = { array: wArray };

    res.render("index.ejs", { data });
   

})})
app.listen(port, () => {
  console.log("port " + port + " runnning");
});

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();


app.set("view engine", "ejs");

app.use('/public', express.static("public"));




app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/survey.html");
});

app.post("/", function(req, res) {

    console.log(req.body);
    let firstName = (req.body.Firstname);
    let lastName = (req.body.Lastname);
    let course = (req.body.Course);
    let address = (req.body.Address);
    let email = (req.body.Email);
    let phone = Number(req.body.Phone);
    let comment = (req.body.Comment);
    var reStr = "<div style=\"border: 2px solid black; width: 400px; height: 400px; border-radius: 20px;margin-left: 500px; margin-top: 30px; padding-left: 80px !important; \">" +
        "<h3> Information Submitted Successfully: </h3>" +
        "<div> First Name : " + firstName + "</div> <br> " +
        "<div> Last Name : " + lastName + "</div> <br> " +
        "<div> Course : " + course + "</div>  <br> " +
        "<div> Address : " + address + "</div>  <br> " +
        "<div> Email : " + email + "</div>  <br> " +
        "<div> Phone : " + phone + "</div>  <br>  " +
        "<div> Comment : " + comment + "</div>  <br>   <br>  " +

        "<button> Go Back </button> "



    +"</div>"

    res.send(reStr);





});

app.listen(5000, function(req, res) {
    console.log("working at port 5000..");
});
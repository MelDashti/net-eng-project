const { MongoClient, ServerApiVersion } = require("mongodb");
var connectionString =
  "mongodb+srv://usertutorial:VzHtsjXeiyxMQ3dm@melsdatabase.agfduic.mongodb.net/?retryWrites=true&w=majority";
var express = require("express");
var cors = require("cors");

var app = express();
app.use(express.json());
app.use(cors());

// for using css as static
app.use(express.static(__dirname));

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

app.get("/getdata", function (req, res) {
  client.connect((err) => {
    var obj = req.body;
    console.log(obj.name);
    // check if object is suitable for database insertion

    const collection = client.db("companyDB").collection("employee");
    collection
      .find({})
      .toArray()
      .then((ans) => {
        res.json(ans);
      });
  });
});

app.get("/search/:firstName", function (req, res) {
  client.connect((err) => {
    var obj = req.params;
    console.log(obj);
    console.log(req.body);
    // find objects with the first name passed to

    const collection = client.db("companyDB").collection("employee");
    collection
      .find(obj)
      .toArray()
      .then((ans) => {
        res.json(ans);
      });
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("Welcome to the backend");
});

app.get("/hey", function (req, res) {
  res.send(" Backend Of My Net-Eng Project");
  console.log("I am about to insert the data");
});

app.post("/postdb", function (req, res) {
  client.connect((err) => {
    var obj = req.body;
    console.log(obj.name);
    // check if object is suitable for database insertion

    const collection = client.db("companyDB").collection("employee");
    collection.insertOne(obj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
  });
});

app.listen(3000, console.log("Server is starting at 3000"));

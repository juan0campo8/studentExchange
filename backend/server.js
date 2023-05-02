/*
Welcome to the backend part of the site. server.js serves as a local server whenever we run the site. 
To start the backend server navigate over to the backend folder using the terminal (cd student-exchange => cd backend)
Once you're in the backend folder, make sure you have installed necessary components (npm install)
Start the server using npm start
This first code snippet starts the express server. They are universal commands that make express run on a specific port.
In this case our port is 8080. I don't know why I just know it works with it.
cors = require("cors") installs cors. Cors simply relaxes the security of our server so we can run tests using curl.
bodyParser and fs are used to parse JSON files and edit files
All APIs have four basic methods: GET, POST, PUT, and DELETE
*/
const express = require("express"),
    app = express(),
    port = process.env.PORT || 8080,
    cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");
const fileUpload = require('express-fileupload');
const path = require('path');

const basicAuth = require("express-basic-auth");
var { authenticator, upsertUser, cookieAuth } = require("./authentication");
const auth = basicAuth({
    authorizer: authenticator
});
const cookieParser = require("cookie-parser");
app.use(cookieParser("82e4e438a0705fabf61f9854e3b575af"));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.get("/authenticate", auth, (req, res) => {
  console.log(`user logging in: ${req.auth.user}`);
  res.cookie('user', req.auth.user, { signed: true });
  res.sendStatus(200);
});

app.post("/users", (req, res) => {
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  const upsertSucceeded = upsertUser(username, password)
  res.sendStatus(upsertSucceeded ? 200 : 401);
});

app.get("/logout", (req, res) => {
  res.clearCookie('user');
  res.end();
});


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
res.send({ message: "Connected to Backend server!" });
});

app.use(fileUpload());

app.post('/fileUpload', uploadFile);

function uploadFile(req, res){
  if(!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // Get the uploaded file
  const file = req.files.file;

  // Create a unique file name
  const fileName = `${Date.now()}_${uploadFile.fileName}`;

  // Set the file path where the file will be saved
  const filePath = path.join(__dirname, '/itemImages/', fileName);
  console.log(filePath);

  // Save the file to the server
  file.mv(filePath, (err) => {
    if (err) {
      console.log(filePath);
      console.error(err);
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
};

app.post("/add/item", addItem);
/*
This post method is used to add items to the database
The first part of the method "/add/item" is the API location which we can call in our src files to use the method
The second part of the method is a function that can be seen below which will add the items
*/

function addItem(request, response) {
    /*
     The first part of the function assigns the data from the request object to local variables
     newItem serves as the actual data that will be asssigned to the database
     The local data we got from the request will be the contents of newItem
    */
    let itemName = request.body.jsonObject.itemName;
    let itemDescription = request.body.jsonObject.itemDescription;
    let itemCategory = request.body.jsonObject.itemCategory;
    let itemPrice = request.body.jsonObject.itemPrice;
    let imagePath = request.body.jsonObject.imagePath;

    var newItem = {
        Item_name: itemName,
        Item_description: itemDescription,
        Item_price: itemPrice,
        Item_category: itemCategory,
        Image_Path : imagePath
    };

    //This is used to convert the data into a JSON string which is the data format used by our database
    const jsonString = JSON.stringify(newItem);

    //This last snippet finalizes the transfer of our data to the database. If it is successful we get a 200 response in the terminal
    var data = fs.readFileSync('database.json');
    var json = JSON.parse(data);
    json.push(newItem);
    fs.writeFile("database.json", JSON.stringify(json), function(err, result) {
        if (err) { console.log('error', err) }
        else { console.log('Successfully wrote to file') }
      });
      response.send(200);
};

app.get("/get/items", getAll);

//This function sends back all the data in our database
function getAll(request, response){
    var data = fs.readFileSync('database.json');
    response.json(JSON.parse(data));
}

app.get("/get/searchitem", getItem);

function getItem(request, response){
    var searchField = request.query.itemTitle;
    var json = JSON.parse (fs.readFileSync('database.json'));
    var returnData = json.filter(jsondata => jsondata.Item_name === searchField);
    response.json(returnData);
};

app.get("/get/itemCategories", getItemsByCategory);

function getItemsByCategory(request, response){
  var category = request.query.itemCategory;
  var json = JSON.parse (fs.readFileSync('database.json'));
  var returnData = json.filter(jsondata => jsondata.Item_category == category);
  response.json(returnData);
};

app.put("/put/toCart", addToCart);

function addToCart(request, response){
  
};



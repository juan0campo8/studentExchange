const express = require("express"),
    app = express(),
    port = process.env.PORT || 8080,
    cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
res.send({ message: "Connected to Backend server!" });
});

app.post("/add/item", addItem)

function addItem(request, response) {
    let itemName = request.body.jsonObject.itemName;
    let itemDescription = request.body.jsonObject.itemDescription;
    let itemPrice = request.body.jsonObject.itemPrice;
    let imagePath = request.body.jsonObject.imagePath;

    var newItem = {
        Item_name: itemName,
        Item_description: itemDescription,
        Item_price: itemPrice,
        Item_category: itemCategory,
        Image_Path : imagePath
    };

    const jsonString = JSON.stringify(newItem);

    var data = fs.readFileSync('database.json');
    var json = JSON.parse(data);
    json.push(newItem);
    fs.writeFile("database.json", JSON.stringify(json), function(err, result) {
        if (err) { console.log('error', err) }
        else { console.log('Successfully wrote to file') }
      });
      response.send(200);
}

app.get("/get/items", getAll)

function getAll(request, response){
    var data = fs.readFileSync('database.json');
    response.json(JSON.parse(data));
}

app.get("/get/searchitem", getItem)

    function getItem(request, response){
        var searchField = request.query.itemTitle;
        var json = JSON.parse (fs.readFileSync('database.json'));
        var returnData = json.filter(jsondata => jsondata.Task === searchField);
        response.json(returnData);
}
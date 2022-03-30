const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const path = require('path');
// const importData = require("./data.json");

const app = express();
const port = 3000;

// Where we will keep faces
let faces = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/faces', (req, res) => {
    res.json(faces);
});

app.post('/face', (req, res) => {
    const face = req.body;

    // Output the face to the console for debugging
    console.log(face);
    faces.push(face);

    res.send('Added!');
    // We will be coding here
});

//add the router
app.use('/', router);
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
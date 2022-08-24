require('dotenv').config();
//const mongoose =  require("mongoose");
const express =  require("express");
const trucks = require("../src/routes/truck.routes");
const location = require('../src/routes/location.routes.js')
const login = require('../src/routes/login.routes.js')
const bodyParser =  require("body-parser");

const app = express()
const port = 8000;



app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

const db = require("../src/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

trucksRouter = express.Router();


app.use('/trucks', trucks);
app.use('/location', location);
app.use('/login',login)


// trucksRouter.route('/api/trucks/')
//app.use("/api/", trucks);


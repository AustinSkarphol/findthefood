

require("dotenv").config()
const express =  require("express");
const trucks = require("../src/routes/truck.routes");
const location = require('../src/routes/location.routes.js')
const login = require('../src/routes/login.routes.js')
const bodyParser =  require("body-parser");

var cors = require('cors')


const router = express.Router();
const app = express()
const port = process.env.REACT_APP_EXPRESS_PORT || 8080
app.use(cors()) 



app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());




app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});







const db = require("../src/models");
const { application } = require("express");
const { render } = require("@testing-library/react");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  
app.use('/api/trucks', trucks);
app.use('/api/location', location);
app.use('/api/login',login)




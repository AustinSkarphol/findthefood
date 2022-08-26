require("dotenv").config()
const express =  require("express");
const trucks = require("../src/routes/truck.routes");
const location = require('../src/routes/location.routes.js')
const login = require('../src/routes/login.routes.js')
const bodyParser =  require("body-parser");
const path = require('node:path');
const app = express()
const port = process.env.REACT_APP_EXPRESS_PORT || 8080



//app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// }); 



app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

// app.use('/home', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

const db = require("../src/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

trucksRouter = express.Router();

app.use('/api/trucks', trucks);
app.use('/api/location', location);
app.use('/api/login',login)

app.use(express.static('./build'));




app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('build/index.html'));
});






// trucksRouter.route('/api/trucks/')
//app.use("/api/", trucks);



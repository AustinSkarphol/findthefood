const express =  require("express");
const trucks = require("../src/routes/truck.routes");
const location = require('../src/routes/location.routes.js')
const login = require('../src/routes/login.routes.js')
const bodyParser =  require("body-parser");

const app = express()
const port = process.env.EXPRESS_PORT;



// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true }));
// app.use(bodyParser.json());

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
console.log('Serverjs '+process.env.MYSQL)
console.log('Serverjs '+process.env.MYSQL_USER)
console.log('Serverjs '+process.env.MYSQL_DB)


app.use('/trucks', trucks);
app.use('/location', location);
app.use('/login',login)


// trucksRouter.route('/api/trucks/')
//app.use("/api/", trucks);



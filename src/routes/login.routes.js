const  express =  require("express");
const router = express.Router();
const TruckLoginController = require("../controllers/login.controller");


router.post("/register",TruckLoginController.create)



module.exports =  router;

const  express =  require("express");
const router = express.Router();
const TruckRegisterController = require("../controllers/truck_registration");


router.post("/register",TruckRegisterController.create)
// router.post("/user/register", UserRegistrationController.create)



module.exports =  router;

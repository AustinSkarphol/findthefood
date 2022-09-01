const  express =  require("express");
const router = express.Router();
const TruckLocationController = require("../controllers/truck_location.controller");

// // Non Cors/Not protected
// router.get("/", TruckLocationController.findAll);
// //router.get("/name/:truck_name", TruckLocationController.)
// router.get("/truck/:id", TruckLocationController.findOne);
// router.get("/truck/name/:name", TruckLocationController.findByName)
// Protected by CORS/Auth
// Truck Creation - Set up email/single use page to send to customers.

router.post("/",TruckLocationController.create)
router.get("/:tid", TruckLocationController.findTruckLocation)
router.get("/", TruckLocationController.getTopTenTrucks)
router.put("/:tid", TruckLocationController.update)


// // Behind Login and limit to updates to specific things like phone number, email, and others.
// router.put("/updatetruck/:id", TruckLocationController.update);

// // No ability to delete right now.
// router.delete("/removetruck/:id", TruckLocationController.delete);

module.exports =  router;
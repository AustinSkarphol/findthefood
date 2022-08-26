const  express =  require("express");
const router = express.Router();
const TruckController = require("../controllers/truck.contoller");



// Non Cors/Not protected
router.get("/", TruckController.findAll);
//router.get("/name/:truck_name", TruckController.)
router.get("/:id", TruckController.findOne);
router.get("/name/:name", TruckController.findByName)
// Protected by CORS/Auth
// Truck Creation - Set up email/single use page to send to customers.
router.post("/", TruckController.create);
// Behind Login and limit to updates to specific things like phone number, email, and others.
router.put("/:id", TruckController.update);
// No ability to delete right now.
router.delete("/:id", TruckController.delete);


// Locations of trucks
// router.post("/",TruckLocationController.create)
// router.get("/:tid", TruckLocationController.findTruckLocation)
// router.put("/:tid", TruckLocationController.update)

// Multi Cart Owner Functions







// Menu Creation

// Menu Item Creation

// Filtering

// v1.10 
/*
version 1.10 will feature updates/statuses
*/
// v1.
/*
version 1. will include user accounts and reviews
*/

// v1.3
/*
version 1.3 will include photos 
*/
/* Future ideas are in app ordering, robust reviews/aggregate google reviews/ */



module.exports =  router;
const { sequelize, truck_owner } = require("../models");
const db = require("../models")
const TruckOwner =  db.truck_owner
const Op = db.Sequelize.Op;



exports.create = (req, res) => {
    if (!req.body.tid) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }
     // Create a Truck
     const truck_owner ={
       truck_id: req.body.truck_id,
       user_id: req.body.user_id,
     };
 
     TruckOwner.create(truck_owner)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
 
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the location for you're Truck."
         });
 
       });
   
 };
 
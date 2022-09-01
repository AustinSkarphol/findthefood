




const { sequelize, truck_location } = require("../models");
const db = require("../models")
const TruckLocation =  db.truck_location
const Op = db.Sequelize.Op;



exports.create = (req, res) => {
   if (!req.body.tid) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Truck
    const truck_location ={
      tid: req.body.tid,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address: req.body.address,
      address_2:  req.body.address_2,
      city: req.body.city,
      state: req.body.state,
      zip:  req.body.zip
    };

    TruckLocation.create(truck_location)
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



exports.update = (req, res) => {
  const tid = req.params.tid;

  TruckLocation.update(req.body, {
    where: { tid: tid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Truck Location was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Truck with id=${tid}. Maybe Trucks was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Truck with Truck Id:" + tid
      });
    });
};


exports.getTopTenTrucks = (req, res) => {

  //var condition = id ? { id: { [Op.eq]: id } } : null;
  TruckLocation.findAll({  limit: 10 })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Truck location."
      });
    });
};

exports.findTruckLocation = (req, res) => {

  const tid = req.params.tid;
  //var condition = id ? { id: { [Op.eq]: id } } : null;
  TruckLocation.findOne({ where: {tid : tid} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Truck location."
      });
    });
};
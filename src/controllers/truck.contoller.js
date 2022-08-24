
const { isNull } = require("util");
const { sequelize } = require("../models");
const db = require("../models")
const Trucks =  db.truck
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
   
    // Create a Truck
    const truck ={
      name: req.body.name,
      owner_first_name: req.body.owner_first_name,
      owner_last_name: req.body.owner_last_name,
      email_address: req.body.email_address,
      phone_number:  req.body.phone_number,
      cuisine: req.body.cuisine,
      gf_option: req.body.gf_option,
      veg_option:  req.body.veg_option,
      vegan_option:  req.body.vegan_option,
      facebook_link:  req.body.facebook_link,
      instagram_link:  req.body.instagram_link,
      website:  req.body.website,
      created_at:  req.body.created_at,
    };
    Trucks.create(truck)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Truck."
        });
      });
      
  
};
// Retrieve all trucks from the database.
exports.findAll = (req, res) => {
  const name = req.params.name;
  //var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Trucks.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Trucks."
      });
    });
    
};
// Find a single truck with an id
exports.findOne = (req, res) => {

  const id = req.params.id;
  //var condition = id ? { id: { [Op.eq]: id } } : null;
  Trucks.findOne({ where: {id : id} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Trucks."
      });
    });

    
};

exports.findByName = (req, res) => {
  const name = req.params.name;
  //var condition = name ? { name: { [Op.eq]: name } } : null;
  Trucks.findOne({ where: {name : name }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Trucks."
      });
    });

};

// Update a truck by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  // do not want to allow the name to be updated. Once they create it, its there. Possibly will remove this later but do not want false carts or name stealing.
  if (req.body.name != null)
    {
      delete req.body.name;
    }
  Trucks.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Update successful!"
        });
      } else {
        res.send({
          message: `Failed to update truck!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Truck with id=" + id
      });
    });
};
// Delete a truck with the specified id in the request
// users wont be able to delete at first. Only Admin via a request but possibly adding it in since we have deleted at column and can then restore if needed.

exports.delete = (req, res) => {
  const id = req.params.id;
  Trucks.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Truck was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Truck with id=${id}. Maybe Truck was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Truck with id=" + id
      });
    });
  
};
// Find all deleted trucks
// This will be later, only for internal API use for ADMIN
exports.findAllDeletedTrucks = (req, res) => {
  
};

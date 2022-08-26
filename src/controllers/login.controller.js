
const db = require("../models")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const { truck } = require("../models");
const Truck = db.truck;
const Login = db.login;
const TruckOwner = db.truck_owner



exports.create = async (req, res) => {
console.log(req.body);
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  encryptedPassword = await bcrypt.hash(req.body.password, 10);

  const findUser = await Login.findOne({ where: { email: req.body.email } })
  if (findUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
  console.log('in loging register.')

  const token = jwt.sign(
    { id: Login.id, email: Login.email, type: Login.type },
    process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  );



  const login = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    name: req.body.name,
    email: req.body.email,
    password: encryptedPassword,
    type: req.body.type,
    token: token,
  };

  const truck = {
    name: req.body.truck_name,
    owner_first_name: req.body.owner_first_name,
    owner_last_name: req.body.owner_last_name,
    email_address: req.body.email_address,
    phone_number: req.body.phone_number,
    cuisine: req.body.cuisine,
    gf_option: req.body.gf_option,
    veg_option: req.body.veg_option,
    vegan_option: req.body.vegan_option,
    facebook_link: req.body.facebook_link,
    instagram_link: req.body.instagram_link,
    website: req.body.website,
    created_at: req.body.created_at,
  };

  const truck_owner = {
    truck_id: req.body.tid,

  };



  // Create Login regardless
  // If Food truck then create flow for adding food truck and linking the user ID and food truck ID by adding to the food truck owner table.
  // If food cart lot, then add owner to food cart lot and set a lot id valu so that trucks can be added to the food cart lot
  if (req.body.type === "Food Truck") {
    console.log('Truck Logic')
    await Login.create(login);
    await Truck.create(truck);
    const tid = await Truck.findOne({where : {name : req.body.truck_name}})
    const uid = await Login.findOne({where : {email : req.body.email}})

    const truck_owner = {
      truck_id: tid.id,
      user_id: uid.id,
  
    };

    await TruckOwner.create(truck_owner)
    .then(data => {
      res.send('User and Food Truck Creation Successful')
    }).catch(err => {

      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the location for you're Truck."
      });
    });
  }
  else if (req.body.type === "Food Truck Lot") {
    console.log('Food Truck Logic')
    res.send('Food Truck Lot Logic not implemnted yet');
    
  }
  else {
    console.log('User Logic')
    Login.create(login)
      .then(data => {
        res.send('Registration Successful!');
      })
      .catch(err => {

        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the location for you're Truck."
        });

      });


  }
};


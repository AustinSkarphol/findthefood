const db = require("../models")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { wait } = require("@testing-library/user-event/dist/utils");
const { ContactsOutlined } = require("@material-ui/icons");
const TruckLogin = db.truck_login
require("dotenv").config();



exports.create = async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    const headerToken = req.header.token;
    console.log(headerToken)
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await TruckLogin.findOne({ where: { email: email } });

    if (user && (await bcrypt.compare(password, user.password))) {

      jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
        if (err) {
          if(err == jwt.)

          console.log(err)
          return res.status(401).json({ "error": true, "message": 'Unauthorized access.' });
        }
        console.log(decoded);
        req.decoded = decoded;

      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
        "error": true,
        "message": 'No token provided.'
      });

    }
    //return res.status(200).json(user);
    //res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

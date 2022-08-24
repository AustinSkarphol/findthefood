const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {   
const truck_location = sequelize.define("truck_location",{

    tid:{
        type: DataTypes.INTEGER,
        required: true,
        unique: true,
        
    },
    latitude:{
        type: DataTypes.DECIMAL(11,8),
        required: true,
    },
    longitude:{
        type: DataTypes.DECIMAL(11,8),
        required: true,
    },
    address:{
        type: DataTypes.STRING,
        required: false,
    },
    address_2:{
        type: DataTypes.STRING,
        required: false,
    },
    city:{
        type: DataTypes.STRING,
        required: false,
    },
    state:{
        type: DataTypes.STRING,
        required: false,
    },
    zip:{
        type: DataTypes.STRING,
        required: false,
    },
    
  },
  {
    sequelize,
    paranoid: true,
  });
  return truck_location;
};




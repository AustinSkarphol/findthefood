const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {   
const truck = sequelize.define("truck",{

    name:{
        type: DataTypes.STRING,
        required: true,
        
    },
    owner_first_name:{
        type: DataTypes.STRING,
        required: true,
    },
    owner_last_name:{
        type: DataTypes.STRING,
        required: false,
    },
    email_address:{
        type: DataTypes.STRING,
        required: true,
    },
    cuisine:{
        type: DataTypes.STRING,
        required: true,
    },
    phone_number:{
        type: DataTypes.STRING,
        required: true,
    },
    gf_option:{
        type: DataTypes.BOOLEAN,
        required: true,
    },
    veg_option:{
        type: DataTypes.BOOLEAN,
        required: true,
    },
    vegan_option:{
        type: DataTypes.BOOLEAN,
        required: false,
    },
    facebook_link:{
        type: DataTypes.STRING,
        required: false,
    },
    instagram_link:{
        type: DataTypes.STRING,
        required: false,
    },
    website:{
        type: DataTypes.STRING,
        required: false,
    },
    
  },
  {
    sequelize,
    paranoid: true,
  });

  return truck;
  
};




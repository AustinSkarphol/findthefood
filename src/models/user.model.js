const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {   
const user = sequelize.define("user",{

    first_name:{
        type: DataTypes.STRING,
        required: false,     
    },
    last_name:{
        type: DataTypes.STRING,
        required: false,        
    },
    name:{
        type: DataTypes.STRING,
        required: false,        
    },
    email:{
        type: DataTypes.STRING,
        required: true,
    },
    type:{
        type: DataTypes.STRING,
        required: true,
    },
    password:{
        type: DataTypes.STRING,
        required: true,
    },
    token:{
        type: DataTypes.STRING,
        required: true,
    },
},
{
  sequelize,
  paranoid: true,
});
return user;
};
const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {   
const truck_owner = sequelize.define("truck_owner",{

    truck_id:{
        type: DataTypes.INTEGER,
        required: true,        
    },
    user_id:{
        type: DataTypes.INTEGER,
        required: true,
    },

},
{
  sequelize,
  paranoid: true,
});
return truck_owner;
};
const dbConfig = require("../models/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});
console.log('INDEX VALUES')
console.log(process.env.MYSQL)
console.log(process.env.MYSQL_USER)
console.log(process.env.MYSQL_DB)
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.truck = require("./truck.model")(sequelize,Sequelize);
db.truck_location = require("./truck_location.model")(sequelize,Sequelize);
db.login = require("./user.model")(sequelize,Sequelize);
db.truck_owner = require("./truck_owner.model.js")(sequelize,Sequelize);
module.exports = db;


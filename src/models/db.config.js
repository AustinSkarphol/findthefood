require("dotenv").config()
module.exports = {
    HOST: process.env.MYSQL,
    USER:  process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PW,
    DB: process.env.MYSQL_DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
      evict: 60000,
    },

  };
  

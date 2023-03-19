const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("rdsTest", "admin", "shiva5665", {
  host: "database-1.cilm0rbpqelb.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };

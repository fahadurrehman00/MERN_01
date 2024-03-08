const sequelize = require("../bin/dbConnection");
const USERS = require("./definations/user");

const models = {
    user:USERS,
};
const db={};
db.sequelize = sequelize;
sequelize.models = models;


module.exports = { db, models};


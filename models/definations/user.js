const {Model, DataTypes}=require("sequelize");
const sequelize = require("../../bin/dbConnection");

class USERS extends Model {}

USERS.init({
    userId:{
        primaryKey: true,
        type: DataTypes.STRING()
    },
    username:{
        type: DataTypes.STRING(34),
        unique:true,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING(18),
        allowNull:false,
    }
},{
    timestamps:true,
    paranoid:true,
    name: "user",
    sequelize,
});

module.exports = USERS;
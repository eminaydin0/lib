const sequelize = require('../config/database');
const { Sequelize, DataTypes } = require("sequelize");

const users = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
            length: [8, 20]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
            isEmail: true
        }
    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user"
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }

});

module.exports = users;
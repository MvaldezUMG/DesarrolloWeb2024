import {DataTypes } from 'sequelize';
import dbConnector from '../infrastructure/dbConnector.orm.mjs';

const User = dbConnector.define('User', {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50]
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 100]
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 100]
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50],
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 100]
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdOn: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    createdBy: {
        type: DataTypes.INTEGER
    },
    updateOn: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedBy: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'users',
    timestamps: true
})

export default User;
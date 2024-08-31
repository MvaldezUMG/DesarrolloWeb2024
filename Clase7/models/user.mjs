import {DataTypes } from 'sequelize';
import dbConnector from '../infrastructure/dbConnector.orm.mjs';

const User = dbConnector.define('User', {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50]
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 50]
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [3, 100]
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'users',
    timestamps: true
})

export default User;
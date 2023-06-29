const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Events', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reminder: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        initialDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finalDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, { timestamps: true });
};
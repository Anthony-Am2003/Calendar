const {DataTypes} = require("sequelize");
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
        initialDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^([01]\d|2[0-3]):([0-5]\d)$/ // Formato "HH:MM" (00 a 23 y min de 00 a 59)
            }
        },
        finalDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
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
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        allDates: {
            type: DataTypes.ARRAY(DataTypes.DATE),
            allowNull: false,
        },
    }, { timestamps: true });
};


'use strict';

module.exports = (sequelize, DataTypes) => {
    const Demo = sequelize.define('Demo', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gmt_create: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        gmt_modified: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'demo',
        timestamps: true,
        underscored: true,

        createdAt: 'gmt_create',
        updatedAt: 'gmt_modified',

        classMethods: {
            associate(models) {
            // example on how to add relations
            // Article.hasMany(models.Comments)
            },
        },
    });

    return Demo;
};

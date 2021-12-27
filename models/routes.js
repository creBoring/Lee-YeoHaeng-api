'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('routes', {
        routesId: {
            field: 'routes_id',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        projectId: {
            field: 'project_id',
            type: DataTypes.STRING(50),
            allowNull: false
        },
        projectDay: {
            field: 'project_day',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        routes: {
            field: 'routes',
            type: DataTypes.STRING(10000),
            allowNull: true
        },
        routesNum: {
            field: 'routes_num',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            field: 'description',
            type: DataTypes.STRING(1000),
            allowNull: true
        }
    }, {
        tableName: 'routes',
        timestamps: false
    })
}

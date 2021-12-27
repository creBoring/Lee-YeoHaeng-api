'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('project', {
        projectId: {
            field: 'project_id',
            type: DataTypes.STRING(130),
            primaryKey: true,
            allowNull: false
        },
        projectName: {
            field: 'project_name',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        projectDays: {
            field: 'project_days',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        projectCity: {
            field: 'project_city',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            field: 'description',
            type: DataTypes.STRING(300),
            allowNull: false
        },
        createUser: {
            field: 'create_user',
            type: DataTypes.STRING(30),
            allowNull: false
        },
        createDate: {
            field: 'create_date',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        tableName: 'project',
        timestamps: false
    })
}

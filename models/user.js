'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    userId: {
      field: 'user_id',
      type: DataTypes.STRING(30),
      primaryKey: true,
      allowNull: false
    },
    password: {
      field: 'password',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      field: 'email',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userName: {
      field: 'user_name',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createDate: {
      field: 'create_date',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'user',
    timestamps: false
  })
}

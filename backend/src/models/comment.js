'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMMENTS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      COMMENTS.belongsTo(
        models.USERS,{
          foreignKey: 'announcer' // 指定的 foreignKey name
        })
    }
  }
  COMMENTS.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    context: DataTypes.STRING,
    announcer: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }, isShow:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'COMMENTS',
  });
  return COMMENTS;
};
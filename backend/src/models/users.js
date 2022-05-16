/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 14:13:06
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-05-16 14:24:54
 * @FilePath: \backend\src\models\users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  USERS.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    mail: DataTypes.STRING,
    image: DataTypes.STRING,
    level:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'USERS',
  });
  return USERS;
};
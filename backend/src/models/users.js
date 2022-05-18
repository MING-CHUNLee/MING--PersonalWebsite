/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 14:13:06
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-05-18 15:57:12
 * @FilePath: \backend\src\models\users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

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
    password: {
      type: DataTypes.STRING,
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
      set(value) {
        const hash = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hash);
      },
    },
    mail: {
      type:DataTypes.STRING,
      validate: {isEmail: true},    
    },
    image: DataTypes.STRING,
    level:DataTypes.INTEGER,
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,

    }
  }, {
    sequelize,
    modelName: 'USERS',
  });
  
  return USERS;
};
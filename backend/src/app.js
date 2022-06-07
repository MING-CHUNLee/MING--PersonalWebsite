/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-16 12:37:03
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-07 15:56:41
 * @FilePath: \backend\src\routes\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require('express');
var app = express();
const cors = require("cors");
var helmet = require('helmet');
const router = require("./routes/index.js");
app.use(helmet());
// app.use(cors());


app.use("/api",router);
require("dotenv").config();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


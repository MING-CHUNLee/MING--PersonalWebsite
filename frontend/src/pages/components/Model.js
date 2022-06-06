/*
 * @Author: your name
 * @Date: 2022-03-29 18:06:43
 * @LastEditTime: 2022-06-06 15:12:00
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\components\Model.js
 */

import { Modal, Divider } from "antd";
import React, { useState } from "react";
const MyModel = ({ visible, onFinish, onCancel, material, whichModal }) => {
  const datas = material.context;
  if (whichModal == 1) {
    return (
      <div>
        <Modal
          title={material.title}
          visible={visible}
          onOk={onFinish}
          onCancel={onCancel}
        >
          <p>
            {datas}
            <br></br>
          </p>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal
          title={material.title}
          visible={visible}
          onOk={onFinish}
          onCancel={onCancel}
        >
          <Divider orientation="left">介紹</Divider>
          <p>
            {material.describe}
            <br></br>
          </p>

          <img src={material.url}></img>
        </Modal>
      </div>
    );
  }
};

export default MyModel;

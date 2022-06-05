/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-06-01 15:36:16
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-01 15:37:37
 * @FilePath: \MING--PersonalWebsite\frontend\src\pages\Home\work.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Bar from "../components/HeaderBar";
import { ContactUs } from "../components/ContactEmail";
import {
  message,
  Row,
  Col,
  Space,
  Timeline,
  Button,
  Drawer,
  Modal,
  Card,
  Form,
  Divider,
} from "antd";
import { Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  SmileTwoTone,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import myface from "../image/Timehouse.png";
import MyFooter from "../components/Footer";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log(e);
    navigate(e, { replace: true });
  };
  return (
    <div
      style={{
        backgroundImage: 'url("../image/p_new0595_m_new05955.svg")',
      }}
    >
      <Bar />
      <Content>
        <div justify="center" align="middle">
          <h1>Project</h1>
        </div>
        <div className="indexcontainer">
          <Row
            style={{
              backgroundColor: "rgba(255,255,255,0.90)",
              padding: "2vw",
            }}
          >
            <Col
              xs={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Row justify="center" align="middle">
                <Col style={{ textAlign: "center" }}>
                  <div>
                    <img
                      src={myface}
                      alt="myface"
                      style={{ width: "30vw", height: "100%" }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              xs={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div>
                <h1>
                  <a href="https://github.com/monosparta/time-house-sensor">
                    <GithubOutlined />
                    時光屋座位管理系統{" "}
                  </a>
                </h1>

                <p>
                  此服務為空間座位管理系統，提供使用者與管理員
                  得知最即時的座位使用情況，座位使用狀態分別
                  為：【異常】、【可使用】、【使用中】與【閒置】。 本團隊採用
                  HC-SR501 人體紅外線感應模組和 RFID-RC522
                  模組偵測、判斷使用者與座位的狀 態，並提供 LINE Bot 與 Web
                  平台的使用者及管理 員進行查看與進階操作。
                  <br/>
                  主要負責系統前端，使用React搭配Axious串接資料並使用Antd Design
                  Guideline。
                </p>

                <div style={{ position: "relative", bottom: "0" }}>
                  技術：
                  <br />
                  <Tag color="#87d068">React Redux</Tag>
                  <Tag color="#87d068">Axious</Tag>
                  <Tag color="#87d068">MySQL</Tag>
                  <Tag color="#87d068">Node.js</Tag>
                  <Tag color="#87d068">MQTT</Tag>
                  <Tag color="#87d068">MicroPython</Tag>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="indexcontainer">
          <Row
            style={{
              backgroundColor: "rgba(255,255,255,0.90)",
              padding: "2vw",
            }}
          >
            <Col
              xs={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Row justify="center" align="middle">
                <Col style={{ textAlign: "center" }}>
                  <div>
                    <img
                      src={myface}
                      alt="myface"
                      style={{ width: "30vw", height: "100%" }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              xs={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div>
                <h1>
                  <a href="#">
                    <GithubOutlined />
                    自助餐零接觸結帳系統
                  </a>
                </h1>

                <p>
                  此服務為空間座位管理系統，提供使用者與管理員
                  得知最即時的座位使用情況，座位使用狀態分別
                  為：【異常】、【可使用】、【使用中】與【閒置】。 本團隊採用
                  HC-SR501 人體紅外線感應模組和 RFID-RC522
                  模組偵測、判斷使用者與座位的狀 態，並提供 LINE Bot 與 Web
                  平台的使用者及管理 員進行查看與進階操作。
                  <br/>
                  主要負責系統前端與文件撰寫
                </p>

                <div style={{ position: "relative", bottom: "0" }}>
                  技術：
                  <br />
                  <Tag color="#87d068">React Redux</Tag>
                  <Tag color="#87d068">Axious</Tag>
                  <Tag color="#87d068">MySQL</Tag>
                  <Tag color="#87d068">Node.js</Tag>
                  <Tag color="#87d068">MQTT</Tag>
                  <Tag color="#87d068">MicroPython</Tag>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <MyFooter />
    </div>
  );
};

export default App;

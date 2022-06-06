/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-06-06 10:27:44
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Bar from "../components/HeaderBar";
import {
  Row,
  Col,
  Space,
  Button,

} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import myface from "../image/myface.png";
import MyFooter from "../components/Footer";
import { Layout } from "antd";
const {Content } = Layout;
const Home = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log(e);
    navigate(e, { replace: true });
  };
  return (
    <div style={{
      backgroundImage: 'url("../image/p_new0595_m_new05955.svg")',

    }}>
      <Bar />
      <Content>
        <div className="indexcontainer">
          <Row style={{backgroundColor:"rgba(255,255,255,0.90)"}}>
            <Col
              xs={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Row justify="center" align="middle">
                <Col style={{textAlign:"center"}}>
                  <div className="circular--portrait">
                    <img src={myface} alt="myface" className="myface" />
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
                <h1 style={{ fontSize: "3vw" }}> Hello，關於我</h1>
                <Space size={"middle"}>
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#283044", border: "#283044" }}
                    size="large"
                    onClick={() => onClick("/resume")}
                  >
                    履歷
                  </Button>
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#78A1BB", border: "#78A1BB" }}
                    size="large"
                    onClick={() => onClick("/work")}
                  >
                    作品
                  </Button>
                  <a href="https://github.com/MING-CHUNLee">
                    <Button
                      type="primary"
                      shape="circle"
                      style={{ backgroundColor: "#937666", border: "#937666" }}
                      size="large"
                      justify="center"
                    >
                      Github
                    </Button>
                  </a>
                </Space>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{
                    display: "flex",
                  }}
                >
                  <b>
                  <br />
                  以下為個人優勢：
      
                  <ol>
                    <li>善於觀察周遭環境進行創意發想與團隊意見整合。</li>
                    <li>
                      溝通能力強， 善於與不同邏輯思維的合作夥伴溝通與協調。
                    </li>
                    <li>外語能力佳，具備英語溝通能力與優良的理解能力。</li>
                    <li>不怕困難，在新創公司保持主動積極的態度面對新事物。</li>
                    <li>
                      較強的抗壓與時間管理能力，平衡實習、競賽、課業與興趣的時間安排。
                    </li>
                  </ol>
                  </b>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <MyFooter />
    </div>
  );
};

export default Home;

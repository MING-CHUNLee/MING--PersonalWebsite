/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-06-06 15:10:33
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */


import Bar from "../components/HeaderBar";
import {
  message,
  Row,
  Col,
  Space,
  Timeline,
  Button,
  Modal,
  Card,
  Divider,
} from "antd";
import React, { useEffect, useState } from "react";

import { BackTop } from "antd";
import "./index.css";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import MyModel from "../components/Model";
import workexps from "../json/worksexps.json";
import competitions from "../json/competitions.json";
import skills from "../json/skills.json";
import licenses from "../json/licenses.json";
import { Layout } from "antd";
import myface from "../image/myface.png";
const { Content } = Layout;
const { Meta } = Card;
const Home = () => {
  // 工作經驗對話框的
  const [material, setMaterial] = useState(false);

  const [isModal1, setIsModal1] = useState(false);
  const [isModal2, setIsModal2] = useState(false);

  const showModal = (prop,data) => {
   
    if (prop === 1) {
      setIsModal1(true);
      setMaterial(data);
      console.log("取得資料"+data);
    } else{
      setIsModal2(true);
      setMaterial(data);
    }
  };

  const handleOk = (prop) => {
    if (prop === 1) {
      setIsModal1(false);
      console.log("=== show modal 1===", prop);
    } else if (prop === 2) {
      setIsModal2(false);
      console.log("=== show modal 2===", prop);
    }
  };

  const handleCancel = (prop) => {
    if (prop === 1) {
      setIsModal1(false);
      console.log("=== show modal 1===", prop);
    } else if (prop === 2) {
      setIsModal2(false);
      console.log("=== show modal 2===", prop);
    }
  };
  // 工作經驗對話框的

  return (
    <div>
      <Bar />
      <Content>
        <BackTop />
        <div className="resume">
          <Row>
            <Col
              span={19}
              style={{
                backgroundImage: 'url("../image/p_new0595_m_new05955.svg")',
              }}
            >
              <div
                style={{
                  margin: "5vw",
                  padding: "1vw",
                  bottom: "5vw",
                  backgroundColor: "rgba(255,255,255,0.80)",
                  width: "40%",
                }}
              >
                <b>
                  <h2>HELLO, I'M</h2> <h1>MING-CHUN,Lee.</h1>
                </b>
                <h4>
                  National Taichung University of Science and Technology
                  Information Application
                </h4>
              </div>
            </Col>
            <Col
              span={5}
              style={{ backgroundColor: "#283044", border: "#283044" }}
            >
              <Row justify="center" align="middle">
                <Col style={{ textAlign: "center" }} block>
                  <div className="smallcircular--portrait">
                    <img src={myface} alt="myface" className="myface" />
                  </div>
                </Col>
              </Row>
              <Row style={{ color: "white" }}>
                <Col span={24}>
                  <h1 style={{ textAlign: "center", color: "white" }}>
                    李明錞
                  </h1>
                  <ul style={{ marginLeft: "3vw" }}>
                    <Space
                      direction="vertical"
                      style={{
                        display: "flex",
                      }}
                    >
                      <li>
                        <HomeOutlined />
                        居住地台中市北區
                      </li>
                      <li>
                        <PhoneOutlined />
                        0934253468
                      </li>
                      <li>
                        <HomeOutlined />
                        mindy80230@gmail.com
                      </li>
                    </Space>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="h2BG">
            <h2>Skills</h2>
          </Row>
          <Row style={{ padding: "5vw" }}>
            {skills.map((skill) => (
              <Col xs={{ span: 12 }} md={{ span: 8 }}>
                <Row>
                  <Col span={12}>
                    <h3>{skill.id}</h3>
                  </Col>
                </Row>
                <Row>
                  {skill.row.map((row) => (
                    <>
                      <h4 key={skill.id}> ◆ {row}</h4>
                      <br />
                    </>
                  ))}
                </Row>
              </Col>
            ))}
          </Row>
          <Row className="h2BG">
            <h2>Work Experience</h2>
          </Row>
          <Row style={{ padding: "5vw" }}>
            <Col span={24}>
              <Timeline>
                {workexps.map((worksExp, index) => (
                  <Timeline.Item>
                    <Card
                      title={worksExp.title}
                      extra={
                        <Button ghost type="primary" onClick={() => showModal(1,worksExp)}>
                          詳情
                        </Button>
                      }
                    >
                      <span key={worksExp.id}>{worksExp.period}</span>
                      <p key={worksExp.id}>{worksExp.describe}</p>
                    </Card>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Col>
          </Row>

          <Row className="h2BG">
            <h2>Honors & awards</h2>
          </Row>
          <Row style={{ padding: "5vw" }}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
              <Timeline>
                {competitions.map((competition, index) => (
                  <Timeline.Item>
                    <Card
                      title={competition.title}
                      extra={
                        <Button ghost type="primary" onClick={() => showModal(2,competition)}>
                          詳情
                        </Button>
                      }
                    >
                      <p key={competition.id}>{competition.describe}</p>
                    </Card>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Col>
          </Row>

          <Row className="h2BG">
            <h2>Licenses & certifications</h2>
          </Row>
          <Row style={{ padding: "5vw" }}>
            {licenses.map((license) => (
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
                <Card style={{ width: "45vw" }}>
                  <Meta title={license.name} description={license.issueDate} />
                </Card>
              
              </Col>
            ))}
          </Row>
          {/* 工作經驗 */}
          <MyModel
            visible={isModal1}
            onFinish={(e) => handleOk(1)}
            onCancel={() => handleCancel(1)}
            whichModal={1}
            material={material}
          />
               <MyModel
            visible={isModal2}
            onFinish={(e) => handleOk(2)}
            onCancel={() => handleCancel(2)}
            whichModal={2}
            material={material}
          />
        </div>
      </Content>
    </div>
  );
};

export default Home;

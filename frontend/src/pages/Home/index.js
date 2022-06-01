/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-06-01 17:05:18
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  SmileTwoTone,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import myface from "../image/myface.png";
import MyFooter from "../components/Footer";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  // 抽屜的
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onClick = (e) => {
    console.log(e);
    navigate(e, { replace: true });
  };
  return (
    <div>
      <Bar />
      <Content>
        <div className="resume">
          <Row className="basic">
            <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 12 }}>
              <Row justify="center" align="middle">
                <Col>
                  <div className="circular--portrait">
                    <img src={myface} alt="myface" className="myface" />
                  </div>
                  <Space direction="vertical" size="small">
                    <Button
                      type="dark"
                      icon={<MailOutlined />}
                      onClick={showDrawer}
                      block
                    >
                      Send mail to mindy80230
                    </Button>
                    <Drawer
                      title="與李明錞聯繫"
                      placement="right"
                      onClose={onClose}
                      visible={visible}
                    >
                      <ContactUs />
                    </Drawer>

                    <Button
                      type="dark"
                      href={"tel:+886-34253468"}
                      icon={<PhoneOutlined />}
                      onClick={() => this.enterLoading(1)}
                      block
                    >
                      Call to 0934-253-468
                    </Button>

                    <Button block>Check MING github!</Button>
                  </Space>
                </Col>
              </Row>
            </Col>

            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 12 }}
            >
              <div>
                <h1 style={{ fontSize: "3.5vw" }}> Hello，關於我</h1>
                <Space>
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#3a4842" }}
                    size="large"
                    onClick={() => onClick("/work")}
                  >
                    履歷
                  </Button>
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#3a4842" }}
                    size="large"
                    onClick={() => onClick("/resume")}
                  >
                    作品
                  </Button>
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#3a4842" }}
                    size="large"
                    justify="center"
                    href="https://www.google.com" 
                  >
                Github
                  </Button>
                </Space>
                <br />
                以下為個人優勢：
                <br />
                <ol>
                  <li>善於觀察周遭環境進行創意發想與團隊意見整合。</li>
                  <li>溝通能力強， 善於與不同邏輯思維的合作夥伴溝通與協調。</li>
                  <li>外語能力佳，具備英語溝通能力與優良的理解能力。</li>
                  <li>不怕困難，在新創公司保持主動積極的態度面對新事物。</li>
                  <li>
                    較強的抗壓與時間管理能力，平衡實習、競賽、課業與興趣的時間安排。
                  </li>
                </ol>
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

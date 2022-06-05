/*
 * @Author: your name
 * @Date: 2022-03-21 11:55:18
 * @LastEditTime: 2022-06-02 15:06:13
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \myresume\src\pages\Home\index.js
 */

import Skill from "../components/Skill";
import License from "../components/License";
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

import { BackTop } from 'antd';
import "./index.css";
import {
    HomeOutlined ,PhoneOutlined
} from "@ant-design/icons";
import workexps from "../json/worksexps.json";
import competitions from "../json/competitions.json";
import skills from "../json/skills.json";
import licenses from "../json/licenses.json";
import { Layout } from "antd";
import myface from "../image/myface.png";
const { Content } = Layout;
const { Meta } = Card;
const Home = () => {
  const [visible, setVisible] = useState(false);
  // 抽屜的
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // 工作經驗對話框的
  const [isModal1, setIsModal1] = useState(false);
  const [isModal2, setIsModal2] = useState(false);

  const showModal = (prop) => {
    if (prop === 0) {
      message.error("尚未結束", 5);
    } else if (prop === 1) {
      setIsModal1(true);
    } else if (prop === 2) {
      setIsModal2(true);
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
  const [isCOMModal1, setIsCOMModal1] = useState(false);
  const [isCOMModal2, setIsCOMModal2] = useState(false);
  const [isCOMModal3, setIsCOMModal3] = useState(false);
  const [isCOMModal4, setIsCOMModal4] = useState(false);

  const showModalCOM = (prop) => {
    if (prop === 0) {
      setIsCOMModal1(true);
    } else if (prop === 1) {
      setIsCOMModal2(true);
    } else if (prop === 2) {
      setIsCOMModal3(true);
    } else if (prop === 3) {
      setIsCOMModal4(true);
    }
  };

  const handleOkCOM = (prop) => {
    if (prop === 0) {
      setIsCOMModal1(false);
    } else if (prop === 1) {
      setIsCOMModal2(false);
    } else if (prop === 2) {
      setIsCOMModal3(false);
    } else if (prop === 3) {
      setIsCOMModal4(false);
    }
  };

  const handleCancelCOM = (prop) => {
    if (prop === 0) {
      setIsCOMModal1(false);
    } else if (prop === 1) {
      setIsCOMModal2(false);
    } else if (prop === 2) {
      setIsCOMModal3(false);
    } else if (prop === 3) {
      setIsCOMModal4(false);
    }
  };

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
                backgroundImage:
                  'url("../image/p_new0595_m_new05955.svg")',
              }}
            >
              <div style={{ margin: "5vw",padding:"1vw", bottom: "5vw",backgroundColor:"rgba(255,255,255,0.80)",width:"40%" }}>


               <b><h2>HELLO, I'M</h2>  <h1>MING-CHUN,Lee.</h1></b>
               <h4>National Taichung University of Science and Technology Information Application</h4>
              </div>
            </Col>
            <Col
              span={5}
              style={{ backgroundColor: "#283044", border: "#283044" }}
            >
           
           <Row justify="center" align="middle" >
                <Col style={{textAlign:"center"}} block>
                  <div className="smallcircular--portrait">
                    <img src={myface} alt="myface" className="myface" />
                  </div>
                </Col>
              
              </Row>
           <Row style={{color: "white"}}>
               <Col span={24}>
               <h1 style={{ textAlign:"center",color:"white"}}>李明錞</h1>
                <ul style={{marginLeft: "3vw"}}>
                <Space
                direction="vertical"
                style={{
                  display: "flex",
                 
                }}
                
              >
                <li>
                <HomeOutlined />居住地台中市北區
                </li>
                <li>
                <PhoneOutlined />0934253468
                </li>
                <li>
                <HomeOutlined />mindy80230@gmail.com
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
                <Skill key={skill.id} skill={skill} />
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
                        <Button type="primary" onClick={() => showModal(index)}>
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
                        <Button
                          type="primary"
                          onClick={() => showModalCOM(index)}
                        >
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
                   <Card
                    style={{ width: "45vw"}}
                    >
                    <Meta title={license.name} description={license.issueDate} />
                    </Card>

                <License key={license.id} license={license} />
              </Col>
            ))}
          </Row>
          {/* 工作經驗 */}
          <Modal
            title="瑪麗安生技有限公司實習生"
            visible={isModal1}
            onOk={() => handleOk(1)}
            onCancel={() => handleCancel(1)}
          >
            <Divider>
              <h2>重要事件與紀錄</h2>
            </Divider>
            <ol>
              <li>分析產品成分與目標客群後撰寫生技產品行銷文案</li>
              <li>分析同行制定電商網站退換貨與網站隱私條款政策</li>
              <li>Wordpress網站SEO優化</li>
              <li>協助外語舞蹈教師與上層的溝通翻譯</li>
              <li>經營Facebook與Instagram社群小編</li>
            </ol>
            <Divider>
              <h2>紀錄照片</h2>
            </Divider>
            <div className="imgc"></div>
          </Modal>
          <Modal
            title="教育部補捐助計畫TDOC兼任助理工讀"
            visible={isModal2}
            onOk={() => handleOk(2)}
            onCancel={() => handleCancel(2)}
          >
            <Divider>
              <h2>重要事件與紀錄</h2>
            </Divider>
            <ol>
              <li>iphone手機修復影片系列英文撰寫字幕與校搞</li>
              <li>使用Word搭配Eexcel製作Outllook群發信件</li>
              <li>協助電腦拆卸組裝教學直播拍攝現場</li>
            </ol>
            <Divider>
              <h2>紀錄照片</h2>
            </Divider>
            <div className="imgc"></div>
          </Modal>
          {/* 比賽經驗 */}
          <Modal
            title="2021年資訊與流通學院專題成果展"
            visible={isCOMModal1}
            onOk={() => handleOkCOM(0)}
            onCancel={() => handleCancelCOM(0)}
          >
            <Divider>
              <h2>介紹</h2>
            </Divider>
            <p>
              本專題期望搭上社群通訊媒體風潮，設立臺中科大資管小幫手主打使用Microsoft
              Q&A，將Chatbot腳本設計 + 智能AI
              創造「基於流程式的機器人」與「基於意圖的AI聊天機器人」的完美結合。本系統亦有設計獨家後台，統一管理本地端與雲端資料庫，以便維護人員隨時更改最新的內容資訊；針對學生留言的個別疑問，後台將會以簡易聊天室呈現，以期望系辦人員確切了解到學生的需求與疑問。
            </p>
            <Divider>
              <h2>紀錄照片</h2>
            </Divider>
            <div className="imgc"></div>
            <div className="imgc"></div>
          </Modal>
          <Modal
            title="Azure雲端創新產業應用組"
            visible={isCOMModal2}
            onOk={() => handleOkCOM(1)}
            onCancel={() => handleCancelCOM(1)}
          >
            <Divider>
              <h2>介紹</h2>
            </Divider>
            <p>
              本系統使用Azure自訂視覺服務，新增數十種自助餐廳常見的主食及配菜圖片並加以訓練，使得本系統可以快速在顧客裝的便當內辨識出各個菜色。利用Azure空間分析的功能測量餐點中各菜點之面積，結合重量感測器測量便當重量，進而計算出各菜色之份量，從而比對後台所輸入之對應價格進行總金額結算，顧客可使用手機進行Line
              Pay掃描螢幕上的QR
              code支付金額，享受快速又方便的購物流程。而商家則可使用從後台系統得知每日的收入和各菜品的銷售情形，以便及時調整食材預算與實際與預測。
            </p>
            <Divider>
              <h2>紀錄照片</h2>
            </Divider>

            <div className="imgc"></div>
          </Modal>
          <Modal
            title="【109學年資訊應用菁英班小專題成果展】"
            visible={isCOMModal3}
            onOk={() => handleOkCOM(2)}
            onCancel={() => handleCancelCOM(2)}
          >
            <Divider>
              <h2>介紹</h2>
            </Divider>
            <p>
              本專案定位為學校的社團管理平台與小型交流社群，促成不同社群之間相互切磋與學習，精進每個幹部的社團管理與活動創新，並達到文本資料電子化；同時讓還在摸索興趣的學生們透過此平台，能快速理解與找尋到符合自己價值觀與興趣的社群，找到自身的價值與定位。
            </p>
            <Divider>
              <h2>紀錄照片</h2>
            </Divider>
            <div className="imgc"></div>
            <div className="imgc"></div>
          </Modal>
          <Modal
            title="Linker無限可能-全國大專院校創意行銷與創業競賽"
            visible={isCOMModal4}
            onOk={() => handleOkCOM(3)}
            onCancel={() => handleCancelCOM(3)}
          >
            <Divider>
              <h2>介紹</h2>
            </Divider>
            <p>對傳統市場營運之攤販進行市場分析並擬訂行銷推廣策略。</p>
            <Divider>
              <h2>紀錄照片</h2>
            </Divider>
            <div className="imgc"></div>
            <div className="imgc"></div>
          </Modal>
        </div>
      </Content>
    </div>
  );
};

export default Home;

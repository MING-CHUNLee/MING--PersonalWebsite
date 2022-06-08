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
  Comment,
  Avatar,
  List,
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
import axios from "../../Axios.config";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log(e);
    navigate(e, { replace: true });
  };
  const [infomation,setInfomation]=useState([]);
  const [comment, setComment] = useState([]);
  const getComment = () => {


      var config = {
        method: 'get',
        url: '/api/user/64e4e446-5075-4837-ab79-a59c89654afc',
    
      };
      
      axios(config)
      .then(function (response) {
        setInfomation(response.data.info);
        setComment(response.data.comment)
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
  };

  useEffect(() => {
    getComment();
    let timer = setInterval(() => {
      getComment();
    }, 10000);
    return () => clearInterval(timer);
  }, []);



  return (
    <div
      style={{
        backgroundImage: 'url("../image/p_new0595_m_new05955.svg")',
      }}
    >
      <Bar />
      <Content>
        <div justify="center" align="middle">
          <h1>個人資料</h1>
        </div>
        <div className="profilecontainer">
          <Row
            style={{
              backgroundColor: "rgba(255,255,255,0.90)",
              padding: "2vw",
            }}
            justify="center" align="middle"
          >
            <Col
              xs={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 24}}
              xl={{ span: 24}}
              justify="center" align="middle"
            >
              名稱：  { infomation.username}
              信箱：{ infomation.mail}
            </Col>

            <Col
              xs={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 24}}
              xl={{ span: 24}}
              justify="center" 
            >
              <div>
              <List
                className="comment-list"
                // header={`${comment.length} replies`}
                itemLayout="horizontal"
                dataSource={comment}
                renderItem={(item) => (
                  <li>
                    <Row>
                      <Col span={22}>
                     
                        <Comment
                          key={item.id}
                          author={item.USER.username}
                          avatar={
                            <Avatar
                              style={{
                                color: "#f56a00",
                                backgroundColor: "#fde3cf",
                              }}
                            >
                              {item.USER.username}
                            </Avatar>
                          }
                          content={item.context}
                          datetime={item.updatedAt}
                        />
                      </Col>
                    
                    
                     
                    </Row>
                  </li>
                )}
              />
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

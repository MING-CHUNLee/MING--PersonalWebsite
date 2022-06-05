/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-05-30 09:56:05
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-01 15:10:56
 * @FilePath: \MING--PersonalWebsite\frontend\src\pages\components\HeaderBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Row, Col, Dropdown, Avatar,Affix } from "antd";
// import { useNavigate } from "react-router-dom";
const { Header } = Layout;

export const HeaderBar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key, { replace: true });
  };

  const User = (e) => {
    console.log("click ", e);
    if(e.key==="logout"){
      localStorage.removeItem("authorized_keys");
      localStorage.removeItem("id");
      window.location.reload();
    }else if(e.key==="profile"){

    }

  };
  const menu = (
    <Menu mode="horizontal" defaultSelectedKeys={[""]}  onClick={User}>
      <Menu.Item key="logout">登出</Menu.Item>
      <Menu.Item key="profile">檔案</Menu.Item>
    </Menu>
  );

  return (
    <> <Affix offsetTop={0}>
<Header style={{backgroundColor: "#283044", border: "#283044" }}>
      <Row  justify="center">
      <Col span={15}>
      <h1 style={{color:"white"}}> 李明錞</h1>
        
      </Col>
      
        <Col
          span={2}
          style={{
            verticalAlign: "middle",
            color: "white",
          }}
        >
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
            <div onClick={(e) => e.preventDefault()}>
              <Avatar size="large" >
             { localStorage.getItem("username")}
              </Avatar>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Header>
    <Row justify="center" style={{backgroundColor: "#283044", border: "#283044" }} >
    <Col span={4}style={{backgroundColor: "#283044", border: "#283044" }}>
          <Menu mode="horizontal" defaultSelectedKeys={[""]} onClick={onClick}  style={{backgroundColor: "#283044", border: "#283044",color:"white" }}>
            <Menu.Item key="/">首頁</Menu.Item>
            <Menu.Item key="/resume">履歷</Menu.Item>
            <Menu.Item key="/work">作品</Menu.Item>
            <Menu.Item key="/comment">留言板</Menu.Item>
          </Menu>
        </Col>
    </Row>
  </Affix>
    
    </>
  );
};
export default HeaderBar;

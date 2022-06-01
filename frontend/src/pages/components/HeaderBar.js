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
import { Layout, Button, Row, Col, Dropdown, Avatar } from "antd";
// import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

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
    <>
    <Header className="black">
      <Row   style={{
        verticalAlign: 'flex-end',height:'100%'
      }}>
      <Col>
      <h1 style={{color:"white"}}> 李明錞</h1>
        
      </Col>
      
        <Col
          span={2}
          push={18}
          style={{
            verticalAlign: "middle",
            color: "white",
          }}
        >
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
            <div onClick={(e) => e.preventDefault()}>
              <Avatar size="large" >
              dfdfdf
              </Avatar>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Header>
    <Row style={{ backgroundColor:"#647b71"}} >
    <Col style={{ backgroundColor:"#3a4842",border:"#647b71"}} >
          <Menu mode="horizontal" defaultSelectedKeys={[""]} onClick={onClick}>
            <Menu.Item key="/">Home</Menu.Item>
            <Menu.Item key="/comment">留言板</Menu.Item>
          </Menu>
        </Col>
    </Row>
    </>
  );
};
export default HeaderBar;

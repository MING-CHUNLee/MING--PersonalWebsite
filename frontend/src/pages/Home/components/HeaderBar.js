import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Row, Col } from "antd";
// import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
const { Header } = Layout;

export const HeaderBar = () => {
  const [current, setCurrent] = React.useState("mail");
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key,{replace:true});
  };

  // const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("authorized_keys");
    window.location.reload();
  };
  return (
    <div>
      <Header className="black">
        <Row>
          <Col
            style={{
              verticalAlign: "middle",
              color: "white",
            }}
          >
            時光屋座位使用管理系統
          </Col>
          <Menu mode="horizontal" defaultSelectedKeys={["mail"]} onClick={onClick}>
            <Menu.Item key="/">AAA
             </Menu.Item>
      <Menu.Item key="/index">
              
        AAAA
      </Menu.Item>
          </Menu>
          <Col
            span={2}
            push={18}
            style={{
              verticalAlign: "middle",
              color: "white",
            }}
          >
            <Button
              style={{ background: "#363F4E", color: "white" }}
              icon={<LogoutOutlined />}
              onClick={(e) => {
                handleLogout(e);
              }}
            >
              LOGOUT
            </Button>
          </Col>
        </Row>
      </Header>
    </div>
  );
};
export default HeaderBar;

import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Row, Col } from "antd";
// import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
const { Header } = Layout;

export const HeaderBar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);

    navigate(e.key, { replace: true });
  };

  // const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("authorized_keys");
    localStorage.removeItem("id");
    window.location.reload();
  };
  return (
    <Header className="black">
      <Row>
        {/* <Col
          style={{
            verticalAlign: "middle",
            color: "white",
          }}
          span
        >
          時光屋座位使用管理系統
        </Col> */}
        <Col>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["index"]}
          onClick={onClick}
        >
          <Menu.Item key="/comment">留言板</Menu.Item>
          <Menu.Item key="/">履歷</Menu.Item>
        </Menu>
        </Col>
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
  );
};
export default HeaderBar;

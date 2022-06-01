import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
import axios from "../../Axios.config";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined, LockOutlined,MailOutlined
} from '@ant-design/icons';
const App = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    var udata = JSON.stringify({
      password: values.password,
      mail: values.mail,
      username: values.username,
    });

    var config = {
      method: "post",
      url: "/api/register",
      data: udata,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/login", { replace: true });
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onClick = (e) => {
    console.log("A");
    navigate("/", { replace: true });
  };
  return (
    <div className="container">
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ textAlign: "center" }}>
          <h1>
            {" "}
            <b>Sign Up</b>
          </h1>
          <h4>
            Already have an account?
            <Button type="link" onClick={onClick}>
              Log In
            </Button>
          </h4>
          <br />
        </div>

        <Form.Item name="username">
        <Input  size="large" prefix={  <UserOutlined  className="site-form-item-icon"/>} placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="mail"
          rules={[
            { type: "email", message: "請輸入有效的郵件地址" },
            {
              required: true,
              message: "格式錯誤，請重新輸入!!",
            },
          ]}
        >
              <Input  size="large" prefix={  <MailOutlined className="site-form-item-icon"/>} placeholder="Mail"/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
            <Input.Password  size="large" prefix={<LockOutlined />} placeholder="Password"/>
        </Form.Item>

        {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
           <Button ghost type="primary" htmlType="submit" shape="round">
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;

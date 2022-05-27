import { Button, Checkbox, Form, Input } from 'antd';
import "./login.css";
import axios from "../../Axios.config";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);

    var udata = JSON.stringify({
        "password":values.password,
        "mail":values.mail,
        "username":values.username,
      });
  
      var config = {
        method: 'post',
        url: '/api/register',
        data : udata
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/login",{replace:true});
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div class="form">
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
        label="username"
        name="username"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="mail"
        name="mail"
        rules={[
            { type: "email", message: "請輸入有效的郵件地址" },
            {
              required: true,
              message: "格式錯誤，請重新輸入!!",
            },
          ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default App;
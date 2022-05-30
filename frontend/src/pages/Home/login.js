import { Button, Checkbox, Form, Input,Switch } from 'antd';
import "./login.css";
import axios from "../../Axios.config";
import { useNavigate } from "react-router-dom";
import {
  LockOutlined,MailOutlined
} from '@ant-design/icons';
const App = () => {
    const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);

    var udata = JSON.stringify({
        "password":values.password,
        "mail":values.mail
      });
  
      var config = {
        method: 'post',
        url: '/api/login',
        data : udata
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("authorized_keys", response.data.token);
        localStorage.setItem("id", response.data.getInfo.id);
        if(values.isShow){
          localStorage.setItem("username", "匿名");
        }else{
          localStorage.setItem("username", response.data.getInfo.username);
        }
       
        navigate("/",{replace:true});
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onClick=(e)=>{

    console.log("A")
    navigate('/register', { replace: true });
  }
  return (
    <div >
    <div className='container'>
    
    <Form
      name="basic"
     
      wrapperCol={{
        span: 24,
      }}

      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      
    >
      <div  style={{textAlign:"center"}}>
      <h1> <b>Log In</b></h1>
        <h4>Don't have an account? <Button type="link"  onClick={onClick}>Sign up</Button></h4>
        <br/>
      </div>
       
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  size="large" prefix={<LockOutlined />} placeholder="Password"/>
      </Form.Item>

      <Form.Item name="isShow" label="匿名" valuePropName="checked">
        <Switch size="small"/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button ghost type="primary" htmlType="submit" shape="round">
          LOG IN
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default App;
import { Avatar, Button, Comment, Form, Input, List } from "antd";
import moment from "moment";
import { useState ,useEffect} from "react";
import Bar from "../components/HeaderBar";
import { Layout } from "antd";
import axios from "../../Axios.config";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [comment, setComment] = useState([]);

  const getComment = () => {
    axios.get(`/api/comment`).then((res) => {
      setComment(res.data.a);
    });
  };

  useEffect(() => {
    getComment();
    let timer = setInterval(() => {
      getComment();
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const onFinish = (values) => {

    var udata = JSON.stringify({
      context:  values.context,
      isShow:"true"
    });

    var config = {
      method: 'post',
      url: '/api/comment',
      data : udata
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Bar />
      <Content>
        <div className="resume">
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="context"
        name="context"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
         <Input.TextArea />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
          <List
            className="comment-list"
            header={`${comment.length} replies`}
            itemLayout="horizontal"
            dataSource={comment}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.announcer}
                  avatar={"https://joeschmoe.io/api/v1/random"}
                  content={item.context}
                />
              </li>
            )}
          />
        </div>
      </Content>
    </div>
  );
};

export default App;

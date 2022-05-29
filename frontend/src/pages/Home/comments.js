import { Avatar, Button, Comment, Form, Input, List, Row, Col,Modal  } from "antd";
import { useState, useEffect } from "react";
import Bar from "../components/HeaderBar";
import { Layout } from "antd";
import axios from "../../Axios.config";
import CollectionCreateForm from '../components/CollectionCreateForm'
import { DownloadOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [comment, setComment] = useState([]);
  const [edit, setEdit] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (context) => {
    setEdit(context)
    console.log(context)
    setIsModalVisible(true);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

 
  const getComment = () => {
    // axios.get(`/api/comment`).then((res) => {
    //   setComment(res.data.a);
    // });
    var config = {
      method: "get",
      url: "/api/comment", 
       headers: {
        authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
      },
    };

    axios(config)
      .then(function (response) {
        setComment(response.data.a);
      })
      .catch(function (error) {
        console.log(error);
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
    let Show;
    if(localStorage.getItem("username")==="匿名"){
      Show="false";
    }else{
      Show=1;
    }
    var udata = JSON.stringify({
      context: values.context,
      isShow: Show,
      id:localStorage.getItem("id")
    });

    var config = {
      method: "post",
      url: "/api/comment", 
       headers: {
        authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
      },
      data: udata,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getComment();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onFinish2 = (values) => {
    setIsModalVisible(false)
    var data = JSON.stringify({
      "context":values.editContext,
      "id": values.id
    });
    
    var config = {
      method: 'patch',
      url: '/api/comment',
      headers: { 
        authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      getComment();
    })
    .catch(function (error) {
      console.log(error);
    });
  };
const Delete=(id)=>{

  var config = {
    method: 'delete',
    url: '/api/comment/'+id,
    headers: { 
      authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
    },
  
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    getComment();
  })
  .catch(function (error) {
    console.log(error);
  });
}
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
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
                <Row>
                  <Col span={22}>
                    {" "}
                    <Comment
                       key={item.id}
                      author={item.USER.username}
                      avatar={"https://joeschmoe.io/api/v1/random"}
                      content={item.context}
                    />
                  </Col>
                  {item.announcer ===localStorage.getItem("id")?(
                    <>
                     <Button key={item.id} type="primary" onClick={() =>showModal(item)}>
                      
                  編輯
                  </Button>
                    <Button
                    type="primary"
                    shape="round"
                    icon={<DownloadOutlined />}
                    size={"small"}
                    onClick={() => Delete(item.id)}
                  />
                 
                </>
                  ) : (
                    ""
                  )}
                 
                </Row>
              </li>
            )}
          />
        </div>
      </Content>
      <CollectionCreateForm
          visible={isModalVisible}
          onFinish={(e) => onFinish2(e)}
          onCancel={onCancel}
          data={edit}
        />
    </div>
    
  );
};

export default App;

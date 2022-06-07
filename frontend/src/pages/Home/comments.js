import {
  Avatar,
  Button,
  Comment,
  Form,
  Input,
  List,
  Row,
  Col,
  Modal,
  Affix,
  Select,
} from "antd";
import { useState, useEffect } from "react";
import Bar from "../components/HeaderBar";
import { Layout } from "antd";
import axios from "../../Axios.config";
import CollectionCreateForm from "../components/CollectionCreateForm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const App = () => {
  const [comment, setComment] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (context) => {
    setEdit(context);
    console.log(context);
    setIsModalVisible(true);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  const getComment = () => {
    var config = {
      method: "get",
      url: "/api/comment",
      headers: {
        authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
      },
    };

    axios(config)
      .then(function (response) {
        setComment(response.data.data);
        console.log();
        console.log(comment);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getComment();
    let timer = setInterval(() => {
      getComment();
    }, 50000);
    return () => clearInterval(timer);
  }, []);
  const onFinish = (values) => {
    let Show;
    if (localStorage.getItem("username") === "匿名") {
      Show = "false";
    } else {
      Show = 1;
    }
    var udata = JSON.stringify({
      context: values.context,
      isShow: Show,
      id: localStorage.getItem("id"),
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
        setValue("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onFinish2 = (values) => {
    setIsModalVisible(false);
    var data = JSON.stringify({
      context: values.editContext,
      id: values.id,
    });

    var config = {
      method: "patch",
      url: "/api/comment",
      headers: {
        authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
      },
      data: data,
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
  const Delete = (id) => {
    var config = {
      method: "delete",
      url: "/api/comment/" + id,
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
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value) => {
    if (value == "user") {
      var config = {
        method: "get",
        url: "/api/comment/userComment",
        headers: {
          authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response)
          setComment(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });

        
    } else if (value == "tourist") {
      var config = {
        method: "get",
        url: "/api/comment/touristComment",
        headers: {
          authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
        },
      };

      axios(config)
        .then(function (response) {
          setComment(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onSearch = (value) => {
    console.log(value);
    var udata = JSON.stringify({
      search: value,
    });
    var config = {
      method: "post",
      url: "/api/comment/search",
      headers: {
        authorization: `Bearer ` + localStorage.getItem("authorized_keys"),
      },
      data: udata,
    };

    axios(config)
      .then(function (response) {
        setComment(response.data.data);
        console.log();
        console.log(comment);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Bar />
      <Content>
        <div className="resume">
          <Row>
            <Col span={6}>
              <Affix
                offsetTop={120}
                onChange={(affixed) => console.log(affixed)}
              >
                <div style={{ margin: "1vw" }}>
                  <Search
                    placeholder="輸入內容"
                    onSearch={onSearch}
                    style={{
                      width: 200,
                    }}
                  />
                  <Select
                    defaultValue="all"
                    style={{
                      width: 120,
                    }}
                    onChange={handleChange}
                  >
                    <Option value="all">所有留言</Option>
                    <Option value="user">使用者留言</Option>
                    <Option value="tourist">遊客留言</Option>
                  </Select>
                </div>
              </Affix>
            </Col>
            <Col span={18}>
              <Comment
                avatar={
                  <Avatar
                    style={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}
                  >
                    {localStorage.getItem("username")}
                  </Avatar>
                }
                content={
                  <Form
                    name="basic"
                    wrapperCol={{ span: 22 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row>
                      <Col span={22}>
                        <Form.Item
                          name="context"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item>
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                }
              />

              <List
                className="comment-list"
                // header={`${comment.length} replies`}
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
                      {item.announcer === localStorage.getItem("id") ? (
                        <>
                          <Button
                            key={item.id}
                            type="primary"
                            onClick={() => showModal(item)}
                            icon={<EditOutlined />}
                            style={{ border: "none" }}
                            ghost
                          />

                          <Button
                            type="primary"
                            style={{ border: "none" }}
                            ghost
                            icon={<DeleteOutlined />}
                            danger
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
            </Col>
          </Row>
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

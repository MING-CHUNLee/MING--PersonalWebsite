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
} from "antd";
import { useState, useEffect } from "react";
import Bar from "../components/HeaderBar";
import { Layout, Card, Pagination } from "antd";
import axios from "../../Axios.config";
import CollectionCreateForm from "../components/CollectionCreateForm";
import { EditOutlined ,DeleteOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [comment, setComment] = useState([]);
  const [showComment, setShowComment] = useState( 
    [{  minValue: 0,
      maxValue: 3 }]);
      const [edit, setEdit] = useState([]);
      const [isModalVisible, setIsModalVisible] = useState(false);
const  handleChange = value => {
  if (value <= 1) {
    setShowComment({
      minValue: 0,
      maxValue: 3
    });
  } else {
    setShowComment({
      minValue:showComment.maxValue,
      maxValue: value * 9
    });
  }
};

const showModal = (context) => {
  setEdit(context);
  console.log(context);
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

  return (
    <div>
    {comment &&
      comment.length > 0 &&
      comment.slice(showComment.minValue, showComment.maxValue).map(val => (

   
        <Row>
          <Col span={22}>
            {" "}
            <Comment
              key={val.id}
              author={val.USER.username}
              avatar={
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  }}
                >
                  {val.USER.username}
                </Avatar>
              }
              content={val.context}
              datetime={val.updatedAt}
            />
          </Col>
          {val.announcer === localStorage.getItem("id") ? (
            <>
              <Button
                key={val.id}
                type="primary"
                onClick={() => showModal(val)}
                icon={<EditOutlined />}
                ghost
              />
    
              
              <Button
                type="primary"
              
                ghost
                icon={< DeleteOutlined/>}
                danger
                onClick={() => Delete(val.id)}
              />
            </>
          ) : (
            ""
          )}
        </Row>
 
      ))}
      {      console.log(showComment.minValue)}
    <Pagination
      defaultCurrent={1}
      defaultPageSize={9}
      onChange={handleChange}
      total={comment.length}
    />
  </div>
  );
};

export default App;

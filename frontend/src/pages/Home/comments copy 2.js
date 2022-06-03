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
      maxValue: 9 }]);
      const [edit, setEdit] = useState([]);
      const [isModalVisible, setIsModalVisible] = useState(false);
const  handleChange = value => {
  if (value <= 1) {
    setShowComment({
      minValue: 0,
      maxValue: 9
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
  let data = [
    { title: "Card title1", value: "Card content1" },
    { title: "Card title2", value: "Card content2" },
    { title: "Card title3", value: "Card content3" },
    { title: "Card title4", value: "Card content4" },
    { title: "Card title5", value: "Card content5" },
    { title: "Card title6", value: "Card content6" },
    { title: "Card title7", value: "Card content7" },
    { title: "Card title8", value: "Card content8" },
    { title: "Card title9", value: "Card content9" },
    { title: "Card title10", value: "Card content10" },
    { title: "Card title11", value: "Card content11" },
    { title: "Card title12", value: "Card content12" },
    { title: "Card title13", value: "Card content13" },
    { title: "Card title14", value: "Card content14" },
    { title: "Card title15", value: "Card content15" }
  ];

  return (
    <div>
    {data &&
      data.length > 0 &&
      data.slice(showComment.minValue, showComment.maxValue).map(val => (
        <Card
          title={val.title}
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>{val.value}</p>
        </Card>
      ))}
    <Pagination
      defaultCurrent={1}
      defaultPageSize={9}
      onChange={handleChange}
      total={15}
    />
  </div>
  );
};

export default App;

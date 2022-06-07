import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Modal,
  Space,
  Form,
  Input,
  Radio,
  Avatar,
  
} from "antd";

export const CollectionCreateForm = ({
  visible,
  onFinish,
  onCancel,
  data,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
        id: data.id,
    });
  }, [form, data.id]);

  
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
    
        onFinish(values);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

    return (
      <Modal
        visible={visible}
        cancelText="　取消　"
        okText="　確認　"
        footer={[
          <Space size="middle">
            <Button
              onClick={handleSubmit}
              style={{ background: "#363F4E", color: "white" }}
              size="large"
            >
              確認
            </Button>
            <Button
              size="large"
              onClick={onCancel}
              style={{ color: "#363F4E" }}
            >
              <b>取消</b>
            </Button>
          </Space>,
        ]}
        onCancel={onCancel}
        closable={false}
      >
        <Row justify="center" align="middle">
          <Space direction="vertical">
            <div className="center">
              <h2 style={{ color: "black"}}>座位-目前為可使用座位</h2>
            </div>
            <Form
              form={form}
              name="form_in_modal"
              autoComplete="off"
              initialValues={{
                modifier: "public",
              }}
            >
               <Form.Item
                label="留言內容"
                name="editContext"
                rules={[{ required: true, message: "請輸入使用者名稱" }]}
              >
                <Input.TextArea placeholder="請輸入名稱" />
              </Form.Item>
           
              <Form.Item name="id" noStyle>
                <Input type="hidden"></Input>
              </Form.Item>
            </Form>
          </Space>
        </Row>
      </Modal>
    );
    
  
};

export default CollectionCreateForm;

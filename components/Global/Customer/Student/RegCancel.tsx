import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider } from "antd";
import { X } from "react-feather";

const RegCancel = () => {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Button
        style={{ paddingRight: 1, paddingLeft: 1 }}
        type="link"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <X />
      </Button>
      <Modal
        width={650}
        title="Hủy đăng ký"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div style={{ paddingRight: 5 }}>
                <Button type="primary">Xác nhận</Button>
              </div>
              <div>
                <Button onClick={() => setIsModalVisible(false)} type="default">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        }
      >
        <div className="wrap-form">
          <Form layout="vertical">
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Học viên">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Số điện thoại">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-12">
                <Form.Item label="Ghi chú">
                  <TextArea />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default RegCancel;

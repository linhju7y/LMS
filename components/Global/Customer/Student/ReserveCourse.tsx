import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider } from "antd";
import { Repeat } from "react-feather";

const ReserveCourse = () => {
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
        <Repeat />
      </Button>
      <Modal
        title="Bảo lưu khóa"
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
                <Form.Item label="Hạn bảo lưu">
                  <Input className="style-input" placeholder="" type="date" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <Form.Item label="Hạn bảo lưu">
                <TextArea className="style-input" placeholder="" rows={5} />
              </Form.Item>
            </div>
            <div className="col-12"></div>
            {/*  */}
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ReserveCourse;

import React from "react";
import { Modal, Form, Input, Button, Divider } from "antd";

const CenterForm = ({ visible, onCancel }) => {
  return (
    <Modal
      title="Tạo khóa học"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <div className="container-fluid">
        <Form layout="vertical">
          <div className="row">
            <div className="col-12">
              <Form.Item label="Tên trung tâm">
                <Input placeholder="" className="style-input" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Item label="Số điện thoại">
                <Input placeholder="" className="style-input" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Item label="Địa chỉ">
                <Input placeholder="" className="style-input" />
              </Form.Item>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <Button className="w-100" type="primary" size="large">
                Lưu
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default CenterForm;

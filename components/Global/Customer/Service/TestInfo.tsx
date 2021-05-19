import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider } from "antd";
import { Info } from "react-feather";

const TextInfo = () => {
  const { TextArea } = Input;
  const { Option } = Select;
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
        <Info />
      </Button>
      <Modal
        width={850}
        title="Thông tin hẹn test"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div style={{ paddingRight: 5 }}>
                <Button type="primary" size="large">
                  Xác nhận
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => setIsModalVisible(false)}
                  type="default"
                  size="large"
                >
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
              <div className="col-3">
                <Form.Item label="Số điện thoại">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Người hẹn">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-6">
                <Form.Item label="Trung tâm">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Ngày hẹn">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Giờ hẹn">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
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
            {/*  */}
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default TextInfo;

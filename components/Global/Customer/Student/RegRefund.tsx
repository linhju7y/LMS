import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider } from "antd";
import { RotateCcw } from "react-feather";

const RegRefund = () => {
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
        <RotateCcw />
      </Button>
      <Modal
        width={800}
        title="Hoàn tiền"
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
              <div className="col-3">
                <Form.Item label="Học viên">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Đã đóng">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Hoàn trả">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Trung tâm hoàn trả">
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
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default RegRefund;

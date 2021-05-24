import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider, Tooltip } from "antd";
import { CreditCard } from "react-feather";

const PaymentService = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Tooltip title="Thanh toán học phí">
        <button
          className="btn btn-icon"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <CreditCard />
        </button>
      </Tooltip>

      <Modal
        width={850}
        title="Hoàn thành học phí"
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
              <div className="col-8">
                <Form.Item label="Học viên">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-4">
                <Form.Item label="Số tiền">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <Form.Item label="Khóa học">
                <Input className="style-input" placeholder="" />
              </Form.Item>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-3">
                <Form.Item label="Thanh toán">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
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
                <Form.Item label="Phương thức thanh toán">
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
                <Form.Item label="Ngày thu tiếp theo">
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
            {/*  */}
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default PaymentService;

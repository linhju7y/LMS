import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Divider } from "antd";
import { Move } from "react-feather";

const ChangeCourse = () => {
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
        <Move />
      </Button>
      <Modal
        width={800}
        title="Chuyển khóa"
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
              <div className="col-6">
                <Form.Item label="Khóa hiện tại">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-3">
                <Form.Item label="Giá khóa học">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Giảm giá">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Đã đóng">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Còn lại">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-7">
                <Form.Item label="Khóa chuyển đến">
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
              <div className="col-5">
                <Form.Item label="Giá khóa học">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-3">
                <Form.Item label="Giảm giá">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Số tiền đóng thêm">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Thanh toán">
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
              <div className="col-3">
                <Form.Item label="Phương thức">
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
                  <Input className="style-input" placeholder="" />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ChangeCourse;

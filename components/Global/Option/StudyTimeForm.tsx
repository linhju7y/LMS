import React, { useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip, Select } from "antd";
import { RotateCcw } from "react-feather";
const StudyTimeForm = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  return (
    <>
      {props.showIcon && (
        <Button
          style={{ paddingRight: 1, paddingLeft: 1 }}
          type="link"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <Tooltip title="Cập nhật">
            <RotateCcw />
          </Tooltip>
        </Button>
      )}
      {props.showAdd && (
        <Button
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
          }}
          size="large"
        >
          Thêm mới
        </Button>
      )}

      {/*  */}
      <Modal
        title="Create Study Time"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical">
            <div className="row">
              <div className="col-12">
                <Form.Item label="Study Time">
                  <Input placeholder="" className="style-input" />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Lesson">
                  <Select defaultValue="lucy" className="w-100 style-input">
                    <Option value="lucy">Lucy</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Start">
                  <Select
                    defaultValue="lucy"
                    className="w-100 style-input"
                    allowClear
                  >
                    <Option value="lucy">Lucy</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <Divider />
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
    </>
  );
};

export default StudyTimeForm;

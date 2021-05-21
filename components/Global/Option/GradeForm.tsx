import React, { useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip } from "antd";
import { RotateCcw } from "react-feather";
const GradeForm = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        title="Tạo khối học"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical">
            <div className="row">
              <div className="col-12">
                <Form.Item label="Grade">
                  <Input placeholder="" className="style-input" />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Description">
                  <Input placeholder="" className="style-input" />
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

export default GradeForm;

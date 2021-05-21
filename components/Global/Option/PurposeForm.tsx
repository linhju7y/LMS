import React, { useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip, Select } from "antd";
import { RotateCcw } from "react-feather";
const PurposeForm = (props) => {
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {props.showIcon && (
        <Tooltip title="Cập nhật">
          <button
            className="btn btn-icon update"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            <RotateCcw />
          </button>
        </Tooltip>
      )}
      {props.showAdd && (
        <Button
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
          }}
          size="large"
        >
          Create
        </Button>
      )}

      {/*  */}
      <Modal
        title={<>{props.showAdd ? "Create Purposes" : "Update Purposes"}</>}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical">
            {/*  */}
            <div className="row">
              <div className="col-12">
                <Form.Item label="Purpose">
                  <Input className="style-input" />
                </Form.Item>
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                {props.showAdd == true ? (
                  <Button className="w-100" type="primary" size="large">
                    Create
                  </Button>
                ) : (
                  <Button className="w-100" type="primary" size="large">
                    Update
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default PurposeForm;

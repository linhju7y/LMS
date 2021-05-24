import React, { useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip, Select } from "antd";
import { Info, Layout } from "react-feather";
import TinyMCE from "~/components/TinyMCE";

const InfoForm = (props) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {props.showIcon && (
        <>
          <Tooltip title="View Detail">
            <button
              className="btn btn-icon info"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              <Info />
            </button>
          </Tooltip>
          <Tooltip title="Iframe">
            <button className="btn btn-icon info">
              <Layout color="#ffb4a2" />
            </button>
          </Tooltip>
        </>
      )}
      {props.showAdd && (
        <button
          className="btn btn-warning add-new"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Thêm mới
        </button>
      )}

      {/*  */}
      <Modal
        width={1000}
        title={
          <>
            {props.showAdd
              ? "Create Form Information "
              : "Update Form Information"}
          </>
        }
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical">
            <div className="row">
              <div className="col-12">
                <Form layout="vertical">
                  <Form.Item label="Title Form">
                    <Input placeholder="" className="style-input" />
                  </Form.Item>
                  <Form.Item label="Role receive email ">
                    <Input placeholder="" className="style-input" />
                  </Form.Item>
                  <Form.Item label="Consultant">
                    <Input placeholder="" className="style-input" />
                  </Form.Item>
                  <Form.Item label="Source">
                    <Input placeholder="" className="style-input" />
                  </Form.Item>
                  <Form.Item label="Note">
                    <TextArea rows={2} />
                  </Form.Item>
                  <Form.Item label="Content">
                    <TinyMCE />
                  </Form.Item>
                </Form>
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

export default InfoForm;

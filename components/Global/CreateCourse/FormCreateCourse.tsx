import React, { useState } from "react";
import {
  Card,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Drawer,
  Collapse,
  Checkbox,
} from "antd";

//  ----------- POPUP FORM ------------
const FormCreateCourse = () => {
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  function onSearch(val) {
    console.log("search:", val);
  }

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  // Show Modal with form
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={showModal}>
        Thông tin khóa học
      </button>
      <Modal
        style={{ top: 20 }}
        title="Thông tin khóa học"
        visible={isModalVisible}
        footer={null}
        width={400}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="wrap-form">
          <Form layout="vertical">
            <Form.Item label="Trung tâm">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn trung tâm"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Trung tâm 1</Option>
                <Option value="lucy">Trung tâm 2</Option>
                <Option value="tom">Trung tâm 3</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Học vụ">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn học vụ"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Item 1</Option>
                <Option value="lucy">Item 2</Option>
                <Option value="tom">Item 3</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Phòng học">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn phòng học"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Phòng 1</Option>
                <Option value="lucy">Phòng 2</Option>
                <Option value="tom">Phòng 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Ca học">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn ca học"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Item 1</Option>
                <Option value="lucy">Item 2</Option>
                <Option value="tom">Item 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Khối học">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn học vụ"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Item 1</Option>
                <Option value="lucy">Item 2</Option>
                <Option value="tom">Item 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Lớp học">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn học vụ"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Item 1</Option>
                <Option value="lucy">Item 2</Option>
                <Option value="tom">Item 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Giáo trình">
              <Select
                size="large"
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn học vụ"
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Item 1</Option>
                <Option value="lucy">Item 2</Option>
                <Option value="tom">Item 3</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Ngày mở">
              <DatePicker style={{ width: "100%" }} onChange={onChangeDate} />
            </Form.Item>

            <Form.Item label="Tên khóa">
              <Input size="large" className="style-input" />
            </Form.Item>

            <Form.Item style={{ marginBottom: "0" }}>
              <button className="btn btn-primary" style={{ width: "100%" }}>
                Xem lịch
              </button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default FormCreateCourse;

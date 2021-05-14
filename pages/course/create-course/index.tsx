import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TitlePage from "~/components/TitlePage";
import {
  Card,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Drawer,
  Collapse,
} from "antd";
type LayoutType = Parameters<typeof Form>[0]["layout"];
const localizer = momentLocalizer(moment);

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const { Option } = Select;

const FormCreateCourse = ({ isModalVisible, handleOk, handleCancel }) => {
  function onSearch(val) {
    console.log("search:", val);
  }

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  return (
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
  );
};

const InfoCourse = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Thông tin khóa học"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={500}
    >
      <div className="info-course"></div>
    </Drawer>
  );
};

const CreateCourse = (props: { props: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
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

  // Show drawer info calendar

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <TitlePage title="Tạo khóa học" />
      <FormCreateCourse
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <InfoCourse onClose={onClose} visible={visible} />

      <Card
        title="Xếp lịch học"
        extra={
          <div className="btn-page">
            <button
              type="button"
              className="btn btn-primary"
              onClick={showModal}
            >
              Thông tin lịch học
            </button>

            <button
              type="button"
              className="btn btn-success"
              onClick={showDrawer}
            >
              Xem lịch học
            </button>
          </div>
        }
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Card>
    </div>
  );
};
export default CreateCourse;

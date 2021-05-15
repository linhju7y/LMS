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
  Checkbox,
} from "antd";
type LayoutType = Parameters<typeof Form>[0]["layout"];
const localizer = momentLocalizer(moment);

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const { Option } = Select;

//  ----------- POPUP FORM ------------
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

// ------------ DRAWER INFO CORUSE --------------
const InfoCourse = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Thông tin khóa học"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={500}
    ></Drawer>
  );
};

// ------------ MAIN COMPONENT ------------------
const CreateCourseSelf = (props: { props: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  // Collapse
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  const text = `
   A dog is a type of domesticated animal.
   Known for its loyalty and faithfulness,
   it can be found as a welcome guest in many households across the world.
 `;

  const onChange_CheckBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
      <div className="row">
        <div className="col-md-8 col-12">
          <Card
            title="Xếp lịch học"
            extra={
              <div className="btn-page-course">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={showModal}
                >
                  Thông tin khóa học
                </button>

                <button
                  type="button"
                  className="btn btn-success"
                  onClick={showDrawer}
                >
                  Xem khóa học
                </button>
              </div>
            }
          >
            <div className="wrap-calendar">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          </Card>
        </div>
        <div className="col-md-4 col-12">
          <div className="wrap-card-info-course">
            <Card title="Thông tin khóa học">
              <div className="info-course">
                <Collapse onChange={callback}>
                  <Panel
                    header={
                      <div className="info-course-item">
                        <Checkbox
                          onChange={onChange_CheckBox}
                          value="item1"
                        ></Checkbox>
                        <p className="title">
                          Ngày học <span>1</span>
                        </p>
                        <ul className="info-course-list">
                          <li>Tiết 7: Môn học test</li>
                          <li>Tiết 8: Môn học test</li>
                        </ul>
                      </div>
                    }
                    key="1"
                  >
                    <div className="info-course-select">
                      <div className="row">
                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn phòng"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Lớp A</Option>
                            <Option value="lucy">Lớp B</Option>
                            <Option value="tom">Lớp C</Option>
                          </Select>
                        </div>

                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn ca"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Ca 1</Option>
                            <Option value="lucy">Ca 2</Option>
                            <Option value="tom">Ca 3</Option>
                          </Select>
                        </div>
                        <div className="col-12 mt-2">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn giáo viên"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Nguyễn An</Option>
                            <Option value="lucy">Nguyễn Phi Hùng</Option>
                            <Option value="tom">Trương Thức</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="info-course-item">
                        <Checkbox
                          onChange={onChange_CheckBox}
                          value="item2"
                        ></Checkbox>
                        <p className="title">
                          Ngày học <span>1</span>
                        </p>
                        <ul className="info-course-list">
                          <li>Tiết 7: Môn học test</li>
                          <li>Tiết 8: Môn học test</li>
                        </ul>
                      </div>
                    }
                    key="2"
                  >
                    <div className="info-course-select">
                      <div className="row">
                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn phòng"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Lớp A</Option>
                            <Option value="lucy">Lớp B</Option>
                            <Option value="tom">Lớp C</Option>
                          </Select>
                        </div>

                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn ca"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Ca 1</Option>
                            <Option value="lucy">Ca 2</Option>
                            <Option value="tom">Ca 3</Option>
                          </Select>
                        </div>
                        <div className="col-12 mt-2">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn giáo viên"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Nguyễn An</Option>
                            <Option value="lucy">Nguyễn Phi Hùng</Option>
                            <Option value="tom">Trương Thức</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="info-course-item">
                        <Checkbox
                          onChange={onChange_CheckBox}
                          value="item3"
                        ></Checkbox>
                        <p className="title">
                          Ngày học <span>1</span>
                        </p>
                        <ul className="info-course-list">
                          <li>Tiết 7: Môn học test</li>
                          <li>Tiết 8: Môn học test</li>
                        </ul>
                      </div>
                    }
                    key="3"
                  >
                    <div className="info-course-select">
                      <div className="row">
                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn phòng"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Lớp A</Option>
                            <Option value="lucy">Lớp B</Option>
                            <Option value="tom">Lớp C</Option>
                          </Select>
                        </div>

                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn ca"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Ca 1</Option>
                            <Option value="lucy">Ca 2</Option>
                            <Option value="tom">Ca 3</Option>
                          </Select>
                        </div>
                        <div className="col-12 mt-2">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn giáo viên"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Nguyễn An</Option>
                            <Option value="lucy">Nguyễn Phi Hùng</Option>
                            <Option value="tom">Trương Thức</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="info-course-item">
                        <Checkbox
                          onChange={onChange_CheckBox}
                          value="item4"
                        ></Checkbox>
                        <p className="title">
                          Ngày học <span>1</span>
                        </p>
                        <ul className="info-course-list">
                          <li>Tiết 7: Môn học test</li>
                          <li>Tiết 8: Môn học test</li>
                        </ul>
                      </div>
                    }
                    key="4"
                  >
                    <div className="info-course-select">
                      <div className="row">
                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn phòng"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Lớp A</Option>
                            <Option value="lucy">Lớp B</Option>
                            <Option value="tom">Lớp C</Option>
                          </Select>
                        </div>

                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn ca"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Ca 1</Option>
                            <Option value="lucy">Ca 2</Option>
                            <Option value="tom">Ca 3</Option>
                          </Select>
                        </div>
                        <div className="col-12 mt-2">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn giáo viên"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Nguyễn An</Option>
                            <Option value="lucy">Nguyễn Phi Hùng</Option>
                            <Option value="tom">Trương Thức</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <div className="info-course-item">
                        <Checkbox
                          onChange={onChange_CheckBox}
                          value="item5"
                        ></Checkbox>
                        <p className="title">
                          Ngày học <span>1</span>
                        </p>
                        <ul className="info-course-list">
                          <li>Tiết 7: Môn học test</li>
                          <li>Tiết 8: Môn học test</li>
                        </ul>
                      </div>
                    }
                    key="5"
                  >
                    <div className="info-course-select">
                      <div className="row">
                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn phòng"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Lớp A</Option>
                            <Option value="lucy">Lớp B</Option>
                            <Option value="tom">Lớp C</Option>
                          </Select>
                        </div>

                        <div className="col-6">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn ca"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Ca 1</Option>
                            <Option value="lucy">Ca 2</Option>
                            <Option value="tom">Ca 3</Option>
                          </Select>
                        </div>
                        <div className="col-12 mt-2">
                          <Select
                            className="style-input"
                            size="large"
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn giáo viên"
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Nguyễn An</Option>
                            <Option value="lucy">Nguyễn Phi Hùng</Option>
                            <Option value="tom">Trương Thức</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCourseSelf;
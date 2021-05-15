import { Card, Select, DatePicker, Input, Form } from "antd";
import ActionTable from "~/components/ActionTable";
import SearchBox from "~/components/Elements/SearchBox";
import TitlePage from "~/components/Elements/TitlePage";
import SortBox from "~/components/SortBox";
import { Filter } from "react-feather";

import React, { useState } from "react";

const CourseList = () => {
  const [showFilter, showFilterSet] = useState(false);
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Danh sách khóa học" />
        <div className="wrap-table">
          <Card
            title={
              <div className="list-btn">
                <button
                  className="btn btn-secondary light"
                  style={{ marginRight: "10px" }}
                >
                  Kiểm tra lịch phòng
                </button>
                <button className="btn btn-success light">
                  Kiểm tra lịch giáo viên
                </button>
              </div>
            }
            extra={
              <div className="list-action-table">
                <SortBox />
                <SearchBox />
                <button
                  className="btn btn-secondary light btn-filter"
                  onClick={funcShowFilter}
                >
                  <Filter />
                </button>
              </div>
            }
          >
            <div className={`wrap-filter ${showFilter ? "show" : "hide"}`}>
              <Form layout="vertical">
                <div className="row">
                  <div className="col-md-3">
                    <Form.Item label="Trung tâm">
                      <Select
                        className="style-input"
                        defaultValue="lucy"
                        onChange={handleChange}
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                          Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item label="Lớp">
                      <Select
                        className="style-input"
                        defaultValue="lucy"
                        onChange={handleChange}
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                          Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item label="Status">
                      <Select
                        className="style-input"
                        defaultValue="lucy"
                        onChange={handleChange}
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                          Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item label="Teacher">
                      <Select
                        className="style-input"
                        defaultValue="lucy"
                        onChange={handleChange}
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                          Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item label="Từ">
                      <DatePicker className="style-input" onChange={onChange} />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item label="Đến">
                      <DatePicker className="style-input" onChange={onChange} />
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item label="Thao tác">
                      <button
                        className="btn btn-primary"
                        style={{ marginRight: "10px" }}
                      >
                        Tìm kiếm
                      </button>
                      <button className="btn btn-success">Export</button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseList;

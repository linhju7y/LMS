import React, { useState } from "react";
import { Card, Select, DatePicker, Input, Form } from "antd";

const CheckEmptyTeacher = () => {
  const { Option } = Select;
  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option value={i.toString(36) + i} key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  function handleChange_StudyTime(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className="wrap-filter-parent">
        <button className="light btn btn-secondary" onClick={funcShowFilter}>
          Lịch trống giáo viên
        </button>
        <div className={`wrap-filter small  ${showFilter ? "show" : "hide"}`}>
          <Form layout="vertical">
            <div className="row">
              <div className="col-md-12">
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

              <div className="col-md-6">
                <Form.Item label="Từ">
                  <DatePicker className="style-input" onChange={onChange} />
                </Form.Item>
              </div>

              <div className="col-md-6">
                <Form.Item label="Đến">
                  <DatePicker className="style-input" onChange={onChange} />
                </Form.Item>
              </div>
              <div className="col-md-12">
                <Form.Item label="Ca học">
                  <Select
                    className="style-input"
                    mode="tags"
                    style={{ width: "100%" }}
                    onChange={handleChange_StudyTime}
                    tokenSeparators={[","]}
                  >
                    {children}
                  </Select>
                </Form.Item>
              </div>
              <div className="col-md-12">
                <Form.Item>
                  <button className="btn btn-primary">Kiểm tra</button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CheckEmptyTeacher;

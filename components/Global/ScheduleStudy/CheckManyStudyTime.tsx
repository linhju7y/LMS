import React, { useState } from "react";
import { Card, Select, DatePicker, Input, Form, Popover } from "antd";

const CheckManyStudyTime = () => {
  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };
  const { Option } = Select;
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

  const teacher = [];
  for (let i = 10; i < 36; i++) {
    teacher.push(
      <Option value={i.toString(36) + i} key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  function handleChange_StudyTime(value) {
    console.log(`selected ${value}`);
  }

  const content = (
    <div className={`wrap-filter small `}>
      <Form layout="vertical">
        <div className="row">
          <div className="col-md-12">
            <Form.Item label="Trung tâm">
              <Select
                className="style-input"
                showSearch
                placeholder="Tỉnh thành"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Chi nhánh 1</Option>
                <Option value="lucy">Chi nhánh 2</Option>
                <Option value="tom">Chi nhánh 3</Option>
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
            <Form.Item className="mb-0">
              <button className="btn btn-primary">Kiểm tra</button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );

  return (
    <>
      <div className="wrap-filter-parent">
        <Popover placement="bottomRight" content={content} trigger="click">
          <button className="light btn btn-success">Kiểm tra một ca</button>
        </Popover>
      </div>
    </>
  );
};

export default CheckManyStudyTime;
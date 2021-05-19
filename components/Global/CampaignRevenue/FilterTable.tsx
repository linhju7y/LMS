import React, { useState } from "react";
import { Card, Select, DatePicker, Input, Form } from "antd";

const FilterTable = ({ showFilter }) => {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className={`wrap-filter ${showFilter ? "show" : "hide"}`}>
      <Form layout="vertical">
        <div className="row">
          <div className="col-md-3">
            <Form.Item label="Trạng thái">
              <Select
                className="style-input"
                defaultValue="lucy"
                onChange={handleChange}
              >
                <Option value="jack">Tất cả</Option>
                <Option value="lucy">Hoạt động</Option>
                <Option value="Yiminghe">Đã khóa</Option>
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
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FilterTable;

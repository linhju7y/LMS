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
            <Form.Item label="Thời gian">
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
  );
};

export default FilterTable;

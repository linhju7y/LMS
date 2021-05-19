import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { data2 } from "./data";

export default function CourseStudent() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <></>;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "center" },
    {
      title: "Cảnh báo",
      dataIndex: "warning",
      render: (status) => {
        let color = status == "Không" ? "blue" : "volcano";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "Kết quả thi",
      dataIndex: "result",
      render: (status) => {
        let color = status == "Không đạt" ? "volcano" : "blue";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Còn lại", dataIndex: "money" },

    {
      title: "",
      render: () => <Button type="link" icon={<Eye />} />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách học viên trong khóa" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data2}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SearchBox />
                <button className="btn btn-secondary light btn-filter">
                  <Filter />
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

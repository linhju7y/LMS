import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";

import { data3 } from "./data";

export default function StudentData() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <></>;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "course" },
    { title: "Giá tiền", dataIndex: "money" },
    { title: "Đã đóng", dataIndex: "payed" },
    { title: "Giảm giá", dataIndex: "discount" },
    { title: "Còn lại", dataIndex: "left" },

    {
      title: "",
      render: () => <Button type="link" icon={<Eye />} />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="học viên chuyển khóa" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data3}
            columns={columns}
            addButton={<></>}
          />
        </div>
      </div>
    </div>
  );
}

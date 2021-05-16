import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";

import { data4 } from "./data";

export default function StudentData() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <></>;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "nameStudent" },
    { title: "Giá tiền", dataIndex: "center" },
    { title: "Đã đóng", dataIndex: "class" },
    { title: "Giảm giá", dataIndex: "time" },
    { title: "Còn lại", dataIndex: "deposit" },

    {
      title: "",
      render: () => <Button type="link" icon={<Eye />} />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="học viên HẸN ĐĂNG KÍ" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data4}
            columns={columns}
            addButton={<></>}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Button, Card, Tag, Form, Input, Select, Image } from "antd";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    {
      title: "Trạng thái",
      dataIndex: "cntStatus",
      render: (cntStatus) => {
        let color = cntStatus == "Đã có hợp đồng" ? "cyan" : "red";
        return (
          <Tag color={color} key={cntStatus}>
            <b> {cntStatus.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Ngày tạo", dataIndex: "regDate" },
    {
      title: "",
      render: () => (
        <>
          <Button type="link" icon={<Eye />} />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách học viên" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PowerTable dataSource={dataService} columns={columns} />
        </div>
      </div>
    </div>
  );
}

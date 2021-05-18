import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, CheckCircle } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Số tiền", dataIndex: "cost" },
    { title: "Ngày hẹn thu", dataIndex: "apmDate" },
    { title: "Ngày nhập học", dataIndex: "testDate" },
    {
      title: "",
      render: () => (
        <>
          <Button type="link" icon={<Eye />} />
          <Button type="link" icon={<CheckCircle />} />
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

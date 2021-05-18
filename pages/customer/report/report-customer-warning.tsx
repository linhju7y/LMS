import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, CheckCircle, XCircle } from "react-feather";
import { Button, Card, Tag, Form, Input, Select, Table } from "antd";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
  const expandedRowRender = () => {
    <></>;
  };
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Lớp", dataIndex: "rpCourse" },
    { title: "Ngày tạo", dataIndex: "testDate" },
    { title: "Người tạo", dataIndex: "rpCreator" },
    { title: "Chủ nhiệm", dataIndex: "rpLeader" },
    {
      title: "",
      render: () => <Button type="link" icon={<Eye />} />,
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
          <ExpandTable
            dataSource={dataService}
            columns={columns}
            addButton={<></>}
            expandable={{ expandedRowRender }}
          />
        </div>
      </div>
    </div>
  );
}

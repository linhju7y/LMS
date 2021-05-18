import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, CheckCircle, XCircle } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <></>;
  };
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Nguồn", dataIndex: "source" },
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Người hẹn", dataIndex: "apmConsultant" },
    { title: "Ngày hẹn", dataIndex: "apmDate" },
    { title: "Giờ hẹn", dataIndex: "apmTime" },
    {
      title: "Xong",
      dataIndex: "apmStatus",
      render: (apmStatus) => {
        let color = apmStatus == "Xong" ? "green" : "red";
        if (apmStatus == "Xong") {
          return <CheckCircle color={color} />;
        } else return <XCircle color={color} />;
      },
    },
    {
      title: "Đã đăng kí",
      dataIndex: "apmReg",
      render: (apmReg) => {
        let color = apmReg == "Đã đăng kí" ? "blue" : "volcano";
        return (
          <Tag color={color} key={apmReg}>
            <b> {apmReg.toUpperCase()}</b>
          </Tag>
        );
      },
    },
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

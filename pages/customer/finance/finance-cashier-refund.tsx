import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { DollarSign } from "react-feather";
import { Button, Card, Tag, Form, Input, Select, Table } from "antd";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
  const expandedRowRender = () => {
    <></>;
  };
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Nguồn", dataIndex: "source" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Số tiền", dataIndex: "cost" },
    {
      title: "Trạng thái",
      dataIndex: "fnStatus",
      render: (fnStatus) => {
        let color = fnStatus == "Duyệt" ? "green" : "volcano";
        return (
          <Tag color={color} key={fnStatus}>
            <b> {fnStatus.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "",
      render: () => (
        <>
          <Button type="link" icon={<DollarSign />} />
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

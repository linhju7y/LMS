import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
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
    { title: "Tên set", dataIndex: "pkgName" },
    { title: "Giá tiền", dataIndex: "testCost" },
    { title: "Giảm giá", dataIndex: "pkgDiscount" },
    { title: "Ngày mua", dataIndex: "apmDate" },
    {
      title: "Trạng thái",
      dataIndex: "pgkPayment",
      render: (pgkPayment) => {
        let color = pgkPayment == "Đã thanh toán" ? "blue" : "volcano";
        return (
          <Tag color={color} key={pgkPayment}>
            <b> {pgkPayment.toUpperCase()}</b>
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
          <PowerTable dataSource={dataService} columns={columns} />
        </div>
      </div>
    </div>
  );
}

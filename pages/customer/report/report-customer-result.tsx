import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";

export default function CustomerServiceResult() {
  const columns = [
    { title: "Ngày", dataIndex: "testDate" },
    { title: "Họ và tên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Test", dataIndex: "pkgName" },
    { title: "Skills", dataIndex: "pkgSkill" },
    {
      title: "Listening",
      dataIndex: "listening",
      render: (listening) => {
        return <span className="tag blue">{listening}</span>;
      },
    },
    {
      title: "Reading",
      dataIndex: "reading",
      render: (reading) => {
        return <span className="tag blue">{reading}</span>;
      },
    },
    {
      title: "Writing",
      dataIndex: "writing",
      render: (writing) => {
        return <span className="tag blue">{writing}</span>;
      },
    },
    {
      title: "Speaking",
      dataIndex: "speaking",
      render: (speaking) => {
        return <span className="tag blue">{speaking}</span>;
      },
    },
    {
      title: "Overall",
      dataIndex: "overall",
      render: (overall) => {
        return <span className="tag green">{overall}</span>;
      },
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách kết quả test" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PowerTable
            dataSource={dataService}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SortBox dataOption={dataService} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

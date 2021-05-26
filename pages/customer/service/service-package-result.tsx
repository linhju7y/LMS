import React from "react";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";

export default function CustomerServiceResult() {
  const columns = [
    { title: "Ngày", dataIndex: "testDate", ...FilterDateColumn("city") },
    { title: "Họ và tên", dataIndex: "nameStudent", ...FilterColumn("city") },
    { title: "Số điện thoại", dataIndex: "tel", ...FilterColumn("city") },
    { title: "Test", dataIndex: "pkgName", ...FilterColumn("city") },
    { title: "Skills", dataIndex: "pkgSkill", ...FilterColumn("city") },
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
    <PowerTable
      TitlePage="Danh sách kết quả test"
      dataSource={dataService}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />

          <SortBox dataOption={dataService} />
        </div>
      }
    />
  );
}

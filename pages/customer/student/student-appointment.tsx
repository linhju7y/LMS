import React from "react";
import ExpandTable from "~/components/ExpandTable";
import { data4 } from "../../../lib/customer-student/data";
import ExpandBox from "~/components/Elements/ExpandBox";
import RegInfo from "~/components/Global/Customer/Student/RegInfo";
import RegCancel from "~/components/Global/Customer/Student/RegCancel";
import RegRefund from "~/components/Global/Customer/Student/RegRefund";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";

export default function StudentAppointment() {
  const expandedRowRender = () => {
    return <ExpandBox />;
  };

  const columns = [
    {
      title: "Học viên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
      render: (nameStudent) => (
        <a className="font-weight-blue">{nameStudent}</a>
      ),
    },
    {
      title: "Tỉnh/TP",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
    },
    {
      title: "Trung tâm",
      dataIndex: "center",
      ...FilterColumn("center"),
      render: (center) => <a className="font-weight-black">{center}</a>,
    },
    {
      title: "Lớp",
      dataIndex: "class",
      ...FilterColumn("class"),
      render: (class1) => <a className="font-weight-black">{class1}</a>,
    },
    {
      title: "Ca",
      dataIndex: "time",
      ...FilterColumn("time"),
      render: (time) => <a className="font-weight-blue">{time}</a>,
    },
    { title: "Đặt cọc", dataIndex: "deposit", ...FilterColumn("deposit") },
    {
      title: "",
      render: () => (
        <>
          <RegInfo />
          <RegCancel />
          <RegRefund />
        </>
      ),
    },
  ];

  return (
    <ExpandTable
      TitlePage="Danh sách học viên hẹn đăng kí"
      expandable={{ expandedRowRender }}
      dataSource={data4}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox dataOption={data4} />
        </div>
      }
    />
  );
}

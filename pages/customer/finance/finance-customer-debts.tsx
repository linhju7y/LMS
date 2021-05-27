import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";
import Tuition from "~/components/Global/Customer/Finance/Tuition";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";

export default function FinanceDebts() {
  const columns = [
    {
      title: "Học viên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
    },
    { title: "Khóa học", dataIndex: "rpCourse", ...FilterColumn("rpCourse") },
    { title: "Trung tâm", dataIndex: "center", ...FilterColumn("center") },
    { title: "Số tiền", dataIndex: "cost", ...FilterColumn("cost") },
    {
      title: "Ngày hẹn thu",
      dataIndex: "apmDate",
      ...FilterDateColumn("apmDate"),
    },
    {
      title: "Ngày nhập học",
      dataIndex: "testDate",
      ...FilterDateColumn("testDate"),
    },
    {
      title: "",
      render: () => (
        <>
          <Link
            href={{
              pathname: "/customer/student/detail/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Xem chi tiết">
              <button className="btn btn-icon view">
                <Eye />
              </button>
            </Tooltip>
          </Link>
          <Tuition />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="Danh sách học viên nợ học phí"
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

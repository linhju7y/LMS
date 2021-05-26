import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";

export default function ReportTest() {
  const columns = [
    { title: "Tỉnh/TP", dataIndex: "city", ...FilterColumn("city") },
    {
      title: "Họ và tên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
    },
    { title: "SĐT", dataIndex: "tel", ...FilterColumn("tel") },
    { title: "Email", dataIndex: "email", ...FilterColumn("email") },
    { title: "Nguồn", dataIndex: "source", ...FilterColumn("source") },
    {
      title: "Tư vấn viên",
      dataIndex: "apmConsultant",
      ...FilterColumn("apmConsultant"),
    },
    {
      title: "Ngày thi",
      dataIndex: "testDate",
      ...FilterDateColumn("testDate"),
    },
    {
      title: "",
      render: () => (
        <>
          <Link
            href={{
              pathname: "/feedback/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Xem chi tiết">
              <button className="btn btn-icon view">
                <Eye />
              </button>
            </Tooltip>
          </Link>
        </>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="Danh sách học viên sắp thi"
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

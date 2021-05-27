import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";
import { ExpandBoxWarning } from "~/components/Elements/ExpandBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";

export default function ReportWarning() {
  const expandedRowRender = () => <ExpandBoxWarning />;
  const columns = [
    { title: "Trung tâm", dataIndex: "center", ...FilterColumn("center") },
    { title: "Học viên", dataIndex: "center", ...FilterColumn("center") },
    { title: "Lớp", dataIndex: "rpCourse", ...FilterColumn("rpCourse") },
    {
      title: "Ngày tạo",
      dataIndex: "testDate",
      ...FilterDateColumn("testDate"),
    },
    {
      title: "Người tạo",
      dataIndex: "rpCreator",
      ...FilterColumn("rpCreator"),
    },
    { title: "Chủ nhiệm", dataIndex: "rpLeader", ...FilterColumn("rpLeader") },
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
    <ExpandTable
      TitlePage="Danh sách học viên bị cảnh báo"
      dataSource={dataService}
      columns={columns}
      expandable={{ expandedRowRender }}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox dataOption={dataService} />
        </div>
      }
    />
  );
}

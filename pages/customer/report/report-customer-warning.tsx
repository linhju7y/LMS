import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Tooltip } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";
import { ExpandBoxWarning } from "~/components/Elements/ExpandBox";

export default function ReportWarning() {
  const expandedRowRender = () => <ExpandBoxWarning />;
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Lớp", dataIndex: "rpCourse" },
    { title: "Ngày tạo", dataIndex: "testDate" },
    { title: "Người tạo", dataIndex: "rpCreator" },
    { title: "Chủ nhiệm", dataIndex: "rpLeader" },
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
              <button className="btn btn-icon">
                <Eye />
              </button>
            </Tooltip>
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách học viên bị cảnh báo" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            dataSource={dataService}
            columns={columns}
            expandable={{ expandedRowRender }}
            Extra={
              <div className="extra-table">
                <SearchBox />
                <button className="btn btn-secondary light btn-filter">
                  <Filter />
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

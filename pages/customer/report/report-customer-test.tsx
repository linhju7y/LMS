import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";

export default function ReportTest() {
  const columns = [
    { title: "Tỉnh/TP", dataIndex: "city" },
    { title: "Họ và tên", dataIndex: "nameStudent" },
    { title: "SĐT", dataIndex: "tel" },
    { title: "Email", dataIndex: "email" },
    { title: "Nguồn", dataIndex: "source" },
    { title: "Tư vấn viên", dataIndex: "apmConsultant" },
    { title: "Ngày thi", dataIndex: "testDate" },
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách học viên sắp thi" />
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

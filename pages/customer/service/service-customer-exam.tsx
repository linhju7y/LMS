import React from "react";
import TitlePage from "~/components/Elements/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";

import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";

export default function CustomerServiceExam() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Đợt thi", dataIndex: "testTime" },
    {
      title: "Loại",
      dataIndex: "typeTest",
      render: (typeTest) => {
        return (
          <>
            {typeTest == "Thi Thử" ? (
              <span className="tag blue">{typeTest}</span>
            ) : (
              <span className="tag green">{typeTest}</span>
            )}
          </>
        );
      },
    },
    { title: "Nhà cung cấp", dataIndex: "provider" },
    { title: "Giá tiền", dataIndex: "testCost" },
    { title: "Ngày thi", dataIndex: "testDate" },
    { title: "Ngày đăng kí", dataIndex: "regDate" },
    {
      title: "",
      render: () => (
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
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách đăng kí thi" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PowerTable
            // TitlePage="Danh sách đăng kí đi thi"
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

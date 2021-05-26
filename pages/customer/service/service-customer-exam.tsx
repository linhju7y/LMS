import React from "react";
import TitlePage from "~/components/Elements/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, Filter } from "react-feather";
import { Button, Tag, Tooltip } from "antd";
import SearchBox from "~/components/Elements/SearchBox";

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
        let color = typeTest == "Thi thử" ? "#2a9d8f" : "#023e8a";
        return (
          <Tag color={color} key={typeTest} className="style-tag">
            {typeTest.toUpperCase()}
          </Tag>
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
            <button className="btn btn-icon">
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

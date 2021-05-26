import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { data6 } from "../../../lib/customer-student/data";
import ExpandBox from "~/components/Elements/ExpandBox";
import Link from "next/link";

export default function StudentAdvisory() {
  const expandedRowRender = () => {
    return <ExpandBox />;
  };

  const columns = [
    { title: "Tỉnh/TP", dataIndex: "city" },
    { title: "Họ và tên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Email", dataIndex: "email" },
    { title: "Nguồn", dataIndex: "introducer" },
    { title: "Trạng thái", dataIndex: "reserve" },
    { title: "Tư vấn viên", dataIndex: "consultant" },

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
          <TitlePage title="học viên cần tư vấn" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data6}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SortBox dataOption={data6} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

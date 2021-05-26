import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Tag, Tooltip, Card } from "antd";
import { data } from "../../../lib/customer-student/data";
import InfoCusCard from "~/components/Profile/ProfileCustomer/component/InfoCusCard";
import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import SortBox from "~/components/Elements/SortBox";

export default function ExchangeStudent() {
  const expandedRowRender = () => {
    return (
      <>
        <Card title="Thông tin cá nhân">
          <InfoCusCard />
        </Card>
      </>
    );
  };

  const columns = [
    { title: "Tỉnh/TP", dataIndex: "city" },
    { title: "Họ và tên", dataIndex: "nameStudent" },
    { title: "SĐT", dataIndex: "tel" },
    { title: "Email", dataIndex: "email" },
    { title: "Nguồn", dataIndex: "introducer" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      render: (status) => {
        return (
          <>
            {status == "Active" ? (
              <span className="tag blue">{status}</span>
            ) : (
              <span className="tag gray">{status}</span>
            )}
          </>
        );
      },
    },
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
          <TitlePage title="Danh sách học viên chuyển giao" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SortBox dataOption={data} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

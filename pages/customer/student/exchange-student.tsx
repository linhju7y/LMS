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
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";

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
    { title: "Tỉnh/TP", dataIndex: "city", ...FilterColumn("city") },
    {
      title: "Họ và tên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
    },
    { title: "SĐT", dataIndex: "tel", ...FilterColumn("tel") },
    { title: "Email", dataIndex: "email", ...FilterColumn("email") },
    { title: "Nguồn", dataIndex: "introducer", ...FilterColumn("introducer") },
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
      filters: [
        {
          text: "Active",
          value: "Active",
        },
        {
          text: "Inactive",
          value: "Inactive",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Tư vấn viên",
      dataIndex: "consultant",
      ...FilterColumn("consultant"),
    },

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
    <ExpandTable
      TitlePage="Danh sách học viên chuyển giao"
      expandable={{ expandedRowRender }}
      dataSource={data}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox dataOption={data} />
        </div>
      }
    />
  );
}

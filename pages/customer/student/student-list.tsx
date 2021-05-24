import React from "react";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Tag, Card, Tooltip } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import InfoCusCard from "~/components/Profile/ProfileCustomer/component/InfoCusCard";

import { data } from "../../../lib/customer-student/data";

const expandedRowRender = () => {
  return (
    <>
      <Card title="Thông tin cá nhân">
        <InfoCusCard />
      </Card>
    </>
  );
};

const StudentData = () => {
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
        let color = status == "Active" ? "#4361ee" : "#d00000";
        return (
          <Tag color={color} key={status} className="style-tag">
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    { title: "Tư vấn viên", dataIndex: "consultant" },
    {
      title: "Đã đăng kí",
      dataIndex: "signUp",
      align: "center",
      render: (status) => {
        let color = status == "Đã xong" ? "#06d6a0" : "#d00000";
        return (
          <Tag color={color} key={status} className="style-tag">
            {status.toUpperCase()}
          </Tag>
        );
      },
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
      TitlePage="DANH SÁCH HỌC VIÊN"
      expandable={{ expandedRowRender }}
      dataSource={data}
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
  );
};

export default StudentData;

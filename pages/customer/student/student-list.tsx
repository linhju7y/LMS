import React from "react";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Card, Tooltip } from "antd";
import Link from "next/link";
import InfoCusCard from "~/components/Profile/ProfileCustomer/component/InfoCusCard";
import { data } from "../../../lib/customer-student/data";
import SortBox from "~/components/Elements/SortBox";

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
        return (
          <>
            {status == "Active" ? (
              <span className="tag green">{status}</span>
            ) : (
              <span className="tag gray">{status}</span>
            )}
          </>
        );
      },
    },
    { title: "Tư vấn viên", dataIndex: "consultant" },
    {
      title: "Đã đăng kí",
      dataIndex: "signUp",
      align: "center",
      render: (status) => {
        return (
          <>
            {status == "Đã xong" ? (
              <span className="tag blue">{status}</span>
            ) : (
              <span className="tag black">{status}</span>
            )}
          </>
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
          <SortBox dataOption={data} />
        </div>
      }
    />
  );
};

export default StudentData;

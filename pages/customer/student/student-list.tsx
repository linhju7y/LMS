import React from "react";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Card, Tooltip } from "antd";
import Link from "next/link";
import InfoCusCard from "~/components/Profile/ProfileCustomer/component/InfoCusCard";
import { data } from "../../../lib/customer-student/data";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";

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
    { title: "Tỉnh/TP", dataIndex: "city", ...FilterColumn("city") },
    {
      title: "Họ và tên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
      render: (nameStudent) => (
        <a className="font-weight-blue">{nameStudent}</a>
      ),
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
              <span className="tag green">{status}</span>
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
      filters: [
        {
          text: "Đã xong",
          value: "Đã xong",
        },
        {
          text: "Chưa đăng kí",
          value: "Chưa đăng kí",
        },
      ],
      onFilter: (value, record) => record.signUp.indexOf(value) === 0,
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
          <FilterTable />
          <SortBox dataOption={data} />
        </div>
      }
    />
  );
};

export default StudentData;

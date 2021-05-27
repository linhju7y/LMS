import React from "react";
import TitlePage from "~/components/Elements/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";

export default function CustomerServiceExam() {
  const columns = [
    {
      title: "Học viên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
      render: (a) => <a className="font-weight-blue">{a}</a>,
    },
    {
      title: "Đợt thi",
      dataIndex: "testTime",
      ...FilterColumn("testTime"),
      render: (a) => <a className="font-weight-black">{a}</a>,
    },
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
      filters: [
        {
          text: "Thi thử",
          value: "Thi thử",
        },
      ],
      onFilter: (value, record) => record.typeTest.indexOf(value) === 0,
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "provider",
      ...FilterColumn("provider"),
    },
    {
      title: "Giá tiền",
      dataIndex: "testCost",
      ...FilterColumn("testCost"),
      render: (a) => <a className="font-weight-black">{a}</a>,
    },
    {
      title: "Ngày thi",
      dataIndex: "testDate",
      ...FilterDateColumn("testDate"),
      render: (a) => <a className="font-weight-black">{a}</a>,
    },
    {
      title: "Ngày đăng kí",
      dataIndex: "regDate",
      ...FilterDateColumn("regDate"),
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
            <button className="btn btn-icon view">
              <Eye />
            </button>
          </Tooltip>
        </Link>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="Danh sách đăng kí đi thi"
      dataSource={dataService}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox dataOption={dataService} />
        </div>
      }
    />
  );
}

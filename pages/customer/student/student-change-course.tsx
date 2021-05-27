import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import SearchBox from "~/components/Elements/SearchBox";
import { Tooltip } from "antd";
import Link from "next/link";
import { data3 } from "../../../lib/customer-student/data";
import ExpandBox from "~/components/Elements/ExpandBox";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";

export default function StudentCourseChange() {
  const expandedRowRender = () => {
    return <ExpandBox />;
  };

  const columns = [
    {
      title: "Học viên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
      render: (nameStudent) => (
        <a className="font-weight-blue">{nameStudent}</a>
      ),
    },
    {
      title: "Khóa học",
      dataIndex: "course",
      ...FilterColumn("course"),
      render: (course) => <a className="font-weight-black">{course}</a>,
    },
    { title: "Giá tiền", dataIndex: "money", ...FilterColumn("money") },
    { title: "Đã đóng", dataIndex: "payed", ...FilterColumn("payed") },
    { title: "Giảm giá", dataIndex: "discount", ...FilterColumn("discount") },
    { title: "Còn lại", dataIndex: "left", ...FilterColumn("left") },

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
    <ExpandTable
      TitlePage="Học viên chuyển khóa"
      expandable={{ expandedRowRender }}
      dataSource={data3}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox dataOption={data3} />
        </div>
      }
    />
  );
}

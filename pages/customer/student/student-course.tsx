import React, { useState } from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter, Move, Repeat, RotateCcw } from "react-feather";
import { Button, Tag, Select, Tooltip } from "antd";
import Link from "next/link";
import { data2 } from "../../../lib/customer-student/data";

import ChangeCourse from "~/components/Global/Customer/Student/ChangeCourse";
import SearchBox from "~/components/Elements/SearchBox";
import ReserveCourse from "~/components/Global/Customer/Student/ReserveCourse";
import RefundCourse from "~/components/Global/Customer/Student/RefundCourse";
import ExpandBox from "~/components/Elements/ExpandBox";

export default function CourseStudent() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <ExpandBox />;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "center" },
    {
      title: "Cảnh báo",
      dataIndex: "warning",
      render: (status) => {
        let color = status == "Không" ? "#0077b6" : "#d00000";
        return (
          <Tag color={color} key={status} className="style-tag">
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Kết quả thi",
      dataIndex: "result",
      render: (status) => {
        let color = status == "Không đạt" ? "#d00000" : "#0077b6";
        return (
          <Tag color={color} key={status} className="style-tag">
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    { title: "Còn lại", dataIndex: "money" },

    {
      title: "",
      render: () => (
        <>
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

          <ChangeCourse />

          <ReserveCourse />

          <RefundCourse />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách học viên trong khóa" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data2}
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

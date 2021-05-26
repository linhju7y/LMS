import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import Link from "next/link";
import { data2 } from "../../../lib/customer-student/data";
import SortBox from "~/components/Elements/SortBox";
import ChangeCourse from "~/components/Global/Customer/Student/ChangeCourse";
import ReserveCourse from "~/components/Global/Customer/Student/ReserveCourse";
import RefundCourse from "~/components/Global/Customer/Student/RefundCourse";
import ExpandBox from "~/components/Elements/ExpandBox";

export default function CourseStudent() {
  const expandedRowRender = () => {
    return <ExpandBox />;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "center" },
    {
      title: "Cảnh báo",
      dataIndex: "warning",
      render: (warning) => {
        return (
          <>
            {warning == "Có" ? (
              <span className="tag red">{warning}</span>
            ) : (
              <span className="tag blue">{warning}</span>
            )}
          </>
        );
      },
    },
    {
      title: "Kết quả thi",
      dataIndex: "result",
      render: (result) => {
        return (
          <>
            {result == "Không đạt" ? (
              <span className="tag black">{result}</span>
            ) : (
              <span className="tag green">{result}</span>
            )}
          </>
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
              <button className="btn btn-icon view">
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
                <SortBox dataOption={data2} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

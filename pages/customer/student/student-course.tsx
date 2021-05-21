import React from "react";
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

export default function CourseStudent() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <></>;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "center" },
    {
      title: "Cảnh báo",
      dataIndex: "warning",
      render: (status) => {
        let color = status == "Không" ? "blue" : "volcano";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "Kết quả thi",
      dataIndex: "result",
      render: (status) => {
        let color = status == "Không đạt" ? "volcano" : "blue";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
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
              <Button type="link" icon={<Eye />} />
            </Tooltip>
          </Link>

          <Tooltip title="Chuyển khóa">
            <ChangeCourse />
          </Tooltip>
          <Tooltip title="Bảo lưu khóa">
            <ReserveCourse />
          </Tooltip>
          <Tooltip title="Hoàn tiền">
            <RefundCourse />
          </Tooltip>
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

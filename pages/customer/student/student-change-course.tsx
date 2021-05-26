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

export default function StudentCourseChange() {
  const expandedRowRender = () => {
    return <ExpandBox />;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "course" },
    { title: "Giá tiền", dataIndex: "money" },
    { title: "Đã đóng", dataIndex: "payed" },
    { title: "Giảm giá", dataIndex: "discount" },
    { title: "Còn lại", dataIndex: "left" },

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="học viên chuyển khóa" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data3}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SortBox dataOption={data3} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

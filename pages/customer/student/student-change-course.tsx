import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import SearchBox from "~/components/Elements/SearchBox";
import { Button, Card, Tag, Form, Input, Select } from "antd";
import Link from "next/link";
import { data3 } from "./data";
import ExpandBox from "~/components/Elements/ExpandBox";

export default function StudentCourseChange() {
  const expandedRowRender = () => {
    const { Option } = Select;
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
          <Button type="link" icon={<Eye />} />
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

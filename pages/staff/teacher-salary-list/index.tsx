import React, { useState } from "react";
import { Table, Card, Tag } from "antd";

import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { Filter } from "react-feather";
import FilterTable from "~/components/Global/CostList";

const dataSource = [
  {
    key: "1",
    FullName: "Hoàng Linh",
    Email: "hoanglinh@gmail.com",
    CurrentCourse: "1",
    LessonLeft: "10",
    Salary: "250,000",
    TotalPrice: "2,500,000",
  },
];

const columns = [
  {
    title: "Họ và tên",
    dataIndex: "FullName",
    key: "fullname",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
  },
  {
    title: "Khóa học hiện tại",
    dataIndex: "CurrentCourse",
    key: "currentcourse",
  },
  {
    title: "Lesson Left",
    dataIndex: "LessonLeft",
    key: "checker",
  },

  {
    title: "Salary",
    dataIndex: "Salary",
    key: "salary",
  },
  {
    title: "TotalPrice",
    dataIndex: "TotalPrice",
    key: "totalprice",
  },
];

const TeacherSalaryList = () => {
  const [showFilter, showFilterSet] = useState(false);
  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Giá vốn hàng bán"
        TitleCard=""
        Extra={
          <div className="extra-table">
            <SearchBox />
            <button
              className="btn btn-secondary light btn-filter"
              onClick={funcShowFilter}
            >
              <Filter />
            </button>
          </div>
        }
      >
        <FilterTable showFilter={showFilter} />
      </PowerTable>
    </>
  );
};

export default TeacherSalaryList;

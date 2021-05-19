import React, { useState } from "react";
import { Table, Card, Tag } from "antd";

import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";

const dataSource = [
  {
    key: "1",
    ID: "3242",
    Student: "Hùng Nguyễn",
    Course: "[ZIM – 35 Võ Oanh] - AM - Intermediate, 18/11, 19:00-21:00,",
    RandomLesson: "Bài random lần thứ: 189",
    Checker: "An An",
    Status: "",
    Rating: 5,
    Action: "",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "id",
  },
  {
    title: "Học viên",
    dataIndex: "Student",
    key: "student",
  },
  {
    title: "Khóa học",
    dataIndex: "Course",
    key: "course",
  },

  {
    title: "Người kiểm tra",
    dataIndex: "Checker",
    key: "checker",
  },

  {
    title: "Trạng thái",
    dataIndex: "Status",
    key: "status",
    render: (Status) => <Tag color="blue">New</Tag>,
  },
  {
    title: "Đánh giá",
    dataIndex: "Rating",
    key: "rating",
  },
  {
    title: "Thao tác",
    dataIndex: "Action",
    key: "action",
    render: (Action) => (
      <Link
        href={{
          pathname: "/staff/exercise-check-list/[slug]",
          query: { slug: 2 },
        }}
      >
        <a className="btn btn-primary">View</a>
      </Link>
    ),
  },
];

const ExerciseCheckList = () => {
  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Danh sách duyệt bài"
        TitleCard=""
        Extra={
          <div className="extra-table">
            <SortBox />
            <SearchBox />
          </div>
        }
      />
    </>
  );
};

export default ExerciseCheckList;

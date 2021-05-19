import React, { useState } from "react";
import { Table, Card, Tag, Select } from "antd";
import { FormOutlined, EyeOutlined } from "@ant-design/icons";

import Link from "next/link";
import ExpandTable from "~/components/ExpandTable";
import { table } from "console";
import SearchBox from "~/components/Elements/SearchBox";
import { Filter } from "react-feather";
import FilterTable from "~/components/Global/ExerciseDoneList/FilterTable";

const dataSource = [
  {
    key: "1",
    Student: "Lê Kha",
    Coruse: "[ZIM – 12 Huỳnh Lan Khanh] - AM - Advanced, 18/01, 09:30-11:30",
    Teacher: "Thầy An",
    Rating: 5,
    CreateDate: "25/02/2020",
    SubmitDate: "27/01/2020",
    ModifiedDate: "27/01/2020",
    Action: "",
  },
];

const columns = [
  {
    title: "Học viên",
    dataIndex: "Student",
    key: "student",
  },
  {
    title: "Khóa học",
    dataIndex: "Coruse",
    key: "course",
  },
  {
    title: "Giáo viên",
    dataIndex: "Teacher",
    key: "teacher",
  },
  {
    title: "Đánh giá",
    dataIndex: "Rating",
    key: "rating",
  },

  {
    title: "Ngày khởi tạo",
    dataIndex: "CreateDate",
    key: "createdate",
  },
  {
    title: "Ngày submit",
    dataIndex: "SubmitDate",
    key: "submitdate",
  },
  {
    title: "Ngày sửa",
    dataIndex: "ModifiedDate",
    key: "modifiedDate",
  },
  {
    title: "Thao tác",
    dataIndex: "Action",
    key: "action",
    render: (Action) => (
      <Link
        href={{
          pathname: "/staff/exercise-done-list/[slug]",
          query: { slug: 2 },
        }}
      >
        <a className="btn btn-primary">View</a>
      </Link>
    ),
  },
];

const ExerciseDoneList = () => {
  const [showFilter, showFilterSet] = useState(false);
  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  const expandedRowRender = () => {
    const { Option } = Select;
    return (
      <>
        <div className="feedback-detail-text">
          Bài tập trong thời gian nghỉ: Paraphrase các câu sau (thử nhiều cách
          nhé, ít nhất hai cách): 1. There will be a few changes in the office.
          2. You weren't careful, so you made many mistakes. 3. He seems very
          well-educated, however, he is not very bright. 4. He drank a cup of
          tea. He felt dizzy afterwards. 5. She loves watching rom-com. Her
          brother loves it, too. 6. He said that it was Mary who had stolen the
          money.
        </div>
      </>
    );
  };

  return (
    <>
      <ExpandTable
        dataSource={dataSource}
        columns={columns}
        TitleCard="Bài đã chấm"
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
        expandable={{ expandedRowRender }}
      >
        <FilterTable showFilter={showFilter} />
      </ExpandTable>
    </>
  );
};

export default ExerciseDoneList;

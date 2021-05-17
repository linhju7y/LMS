import { Card, Table } from "antd";
import ActionTable from "~/components/ActionTable";
import SearchBox from "~/components/Elements/SearchBox";
import TitlePage from "~/components/Elements/TitlePage";
import SortBox from "~/components/SortBox";
import { Filter } from "react-feather";
import Link from "next/link";

import React, { useState } from "react";

import CourseListContent from "~/components/Global/CourseList/CourseListContent";
import FilterTable from "~/components/Global/CourseListReport/FilterTable";

const columns = [
  {
    title: "Tên khóa",
    dataIndex: "CourseName",
    key: "coursename",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cơ sở",
    dataIndex: "Address",
    key: "address",
  },
  {
    title: "Tình trạng",
    dataIndex: "Status",
    key: "status",
  },
  {
    title: "Giá khóa",
    key: "pricecourse",
    dataIndex: "PriceCourse",
  },
  {
    title: "Học viên",
    key: "student",
    dataIndex: "Student",
  },
  {
    title: "Đã thu",
    dataIndex: "PriceReceived",
    key: "pricereceived",
  },
  {
    title: "nợ",
    dataIndex: "Debt",
    key: "debt",
  },
  {
    title: "Tổng số buổi học",
    dataIndex: "TotalStudyDay",
    key: "totalstudyday",
  },
  {
    title: "Số buổi học",
    dataIndex: "StudyDay",
    key: "studyday",
  },
  {
    title: "Ngày khai giảng",
    dataIndex: "StartDay",
    key: "startday",
  },
  {
    title: "Ngày kết thúc",
    dataIndex: "EndDay",
    key: "enday",
  },
];

const data = [
  {
    key: "1",
    CourseName:
      "[ZIM - 1A - 1B Dân Chủ] - AS - Pronunciation, 03/04, 18:30-20:30,",
    Address: "ZIM - 1A - 1B Dân Chủ",
    Status: "Sắp mở",
    PriceCourse: "2,950,000",
    Student: 1,
    PriceReceived: "3,500,000",
    Debt: "	-550,000",
    TotalStudyDay: 30,
    StudyDay: 30,
    StartDay: "03/04/2021",
    EndDay: "10/07/2021",
  },
];

const CourseListReport = () => {
  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <div className="course-list-page">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách khóa học - báo cáo" />
          <div className="wrap-table">
            <Card
              extra={
                <div className="list-action-table">
                  <SortBox />
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
              <div className="course-list-report-content">
                <Table columns={columns} dataSource={data} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListReport;

import { Card, Select, DatePicker, Input, Form } from "antd";
import ActionTable from "~/components/ActionTable";
import SearchBox from "~/components/Elements/SearchBox";
import TitlePage from "~/components/Elements/TitlePage";
import SortBox from "~/components/Elements/SortBox";
import { Filter } from "react-feather";

import React, { useState } from "react";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import CourseListContent from "~/components/Global/CourseList/CourseListContent";
import Link from "next/link";

import { useAuth } from "~/context/auth";
import ScheduleRoom from "~/components/Global/CourseList/ScheduleRoom";
import ScheduleTeacher from "~/components/Global/CourseList/ScheduleTeacher";

const CourseList = () => {
  const { getTitlePage } = useAuth();

  getTitlePage("Danh sách khóa học");
  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <div className="course-list-page">
      <div className="row">
        <div className="col-12">
          <div className="wrap-table">
            <Card
              title={
                <div className="list-action-table">
                  <button
                    className="btn btn-secondary light btn-filter"
                    onClick={funcShowFilter}
                  >
                    <Filter />
                  </button>
                  <SortBox />
                </div>
              }
              extra={
                <div className="list-btn">
                  <ScheduleRoom />

                  <ScheduleTeacher />
                </div>
              }
            >
              <FilterTable showFilter={showFilter} />
              <div className="course-list-content">
                <CourseListContent />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;

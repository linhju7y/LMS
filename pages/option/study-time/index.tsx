import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption";
import { Tooltip, Switch } from "antd";
import StudyTimeForm from "~/components/Global/Option/StudyTimeForm";
const StudyTime = () => {
  const columns = [
    { title: "Study time", dataIndex: "studyTime" },
    { title: "Lesson", dataIndex: "grade" },
    { title: "Start", dataIndex: "start" },
    { title: "End", dataIndex: "end" },
    {
      title: "Hidden",
      render: () => (
        <Switch
          checkedChildren="Hidden"
          unCheckedChildren="Hidden"
          size="default"
        />
      ),
    },
    {
      render: () => (
        <>
          <StudyTimeForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="STUDY TIME LIST" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<StudyTimeForm showAdd={true} />}
          dataSource={data}
          columns={columns}
          Extra={
            <div className="extra-table">
              <SearchBox />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default StudyTime;

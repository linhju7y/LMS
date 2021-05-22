import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption";

import { Tag, Button, Tooltip, Switch } from "antd";
import GradeForm from "~/components/Global/Option/GradeForm";
import { Info, RotateCcw } from "react-feather";
const Grade = () => {
  const columns = [
    { title: "Grade", dataIndex: "grade" },
    { title: "Description", dataIndex: "district" },
    { title: "Modified By", dataIndex: "district" },
    { title: "Modified Date", dataIndex: "district" },
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
          <Tooltip title="Cập nhật trung tâm">
            <GradeForm showIcon={true} />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Danh sách khối học" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<GradeForm showAdd={true} />}
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

export default Grade;

import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import { Tooltip, Switch } from "antd";
import GradeForm from "~/components/Global/Option/GradeForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import LayoutBase from "~/components/LayoutBase";
const Grade = () => {
  const columns = [
    { title: "Grade", dataIndex: "grade", ...FilterColumn("grade") },
    {
      title: "Description",
      dataIndex: "district",
    },
    {
      title: "Modified By",
      dataIndex: "rpCreator",
      ...FilterColumn("rpCreator"),
    },
    {
      title: "Modified Date",
      dataIndex: "regDate",
      ...FilterDateColumn("regDate"),
    },
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
    <PowerTable
      addClass="basic-header"
      TitlePage="Danh sách khối học"
      TitleCard={<GradeForm showAdd={true} />}
      dataSource={data}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox />
        </div>
      }
    />
  );
};
Grade.sharedComponentFunction = LayoutBase;
export default Grade;

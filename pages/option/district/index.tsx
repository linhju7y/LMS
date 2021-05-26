import React from "react";
import PowerTable from "~/components/PowerTable";

import { data } from "../../../lib/option/dataOption";
import DistrictForm from "~/components/Global/Option/DistrictForm";
import FilterColumn from "~/components/Tables/FilterColumn";

import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
const District = () => {
  const columns = [
    {
      title: "Provincial",
      dataIndex: "provincial",
      ...FilterColumn("provincial"),
    },
    { title: "Districts", dataIndex: "district", ...FilterColumn("district") },
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
      render: () => (
        <>
          <DistrictForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="District List"
      TitleCard={<DistrictForm showAdd={true} />}
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

export default District;

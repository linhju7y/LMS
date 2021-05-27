import React from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption2";
import FeedBackForm from "~/components/Global/Option/FeedBackForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";

const FeedBackList = () => {
  const columns = [
    { title: "Role", dataIndex: "role", ...FilterColumn("role") },
    { title: "Feedback", dataIndex: "services" },
    { title: "Modified By", dataIndex: "modBy", ...FilterColumn("modBy") },
    {
      title: "Modified Date",
      dataIndex: "modDate",
      ...FilterDateColumn("modDate"),
    },

    {
      render: () => (
        <>
          <FeedBackForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="Feedback category"
      TitleCard={<FeedBackForm showAdd={true} />}
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

export default FeedBackList;

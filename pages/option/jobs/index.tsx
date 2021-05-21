import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../dataOption2";
import JobForm from "~/components/Global/Option/JobForm";

const JobsList = () => {
  const columns = [
    { title: "Job", dataIndex: "job" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "modDate" },
    {
      render: () => (
        <>
          <JobForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Jobs List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<JobForm showAdd={true} />}
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

export default JobsList;

import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";
import FeedBackForm from "~/components/Global/Option/FeedBackForm";

const FeedBackList = () => {
  const columns = [
    { title: "Role", dataIndex: "role" },
    { title: "Feedback", dataIndex: "services" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "modDate" },

    {
      render: () => (
        <>
          <FeedBackForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Feedback Category" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<FeedBackForm showAdd={true} />}
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

export default FeedBackList;

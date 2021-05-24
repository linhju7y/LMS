import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";

import { Tag, Tooltip } from "antd";
import DayOffForm from "~/components/Global/Option/DayOffForm";

const DayOff = () => {
  const columns = [
    { title: "Day", dataIndex: "dayOff" },
    { title: "Note", dataIndex: "noteDayOff" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "expires" },
    {
      render: () => (
        <>
          <DayOffForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Day Off List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<DayOffForm showAdd={true} />}
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

export default DayOff;

import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";

import { Tag, Tooltip } from "antd";
import PurposeForm from "~/components/Global/Option/PurposeForm";

const Purpose = () => {
  const columns = [
    { title: "Purposes", dataIndex: "purpose" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "expires" },
    {
      render: () => (
        <>
          <Tooltip title="Cập nhật trung tâm">
            <PurposeForm showIcon={true} />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Purposes List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<PurposeForm showAdd={true} />}
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

export default Purpose;

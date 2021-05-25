import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption";

import { Tag, Button, Tooltip, Switch } from "antd";
import DistrictForm from "~/components/Global/Option/DistrictForm";
const Provincial = () => {
  const columns = [
    { title: "Provincial", dataIndex: "provincial" },
    { title: "Districts", dataIndex: "district" },
    { title: "Modified By", dataIndex: "rpCreator" },
    { title: "Modified Date", dataIndex: "regDate" },

    {
      render: () => (
        <>
          <DistrictForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="District List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<DistrictForm showAdd={true} />}
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

export default Provincial;

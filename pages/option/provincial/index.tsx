import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption";

import { Tag, Button, Tooltip, Switch } from "antd";
import ProvincialForm from "~/components/Global/Option/ProvincialForm";
import { Info, RotateCcw } from "react-feather";
const Service = () => {
  const columns = [
    { title: "Provincial", dataIndex: "provincial" },
    { title: "Districts", dataIndex: "district" },
    { title: "Modified By", dataIndex: "rpCreator" },
    { title: "Modified Date", dataIndex: "regDate" },

    {
      render: () => (
        <>
          <Tooltip title="Cập nhật trung tâm">
            <ProvincialForm showIcon={true} />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Provincial List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<ProvincialForm showAdd={true} />}
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

export default Service;

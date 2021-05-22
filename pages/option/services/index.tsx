import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";

import ServiceForm from "~/components/Global/Option/ServiceForm";

const ServiceList = () => {
  const columns = [
    { title: "Service", dataIndex: "services" },
    { title: "Description", dataIndex: "note" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "modDate" },
    {
      render: () => (
        <>
          <ServiceForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Services List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<ServiceForm showAdd={true} />}
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

export default ServiceList;

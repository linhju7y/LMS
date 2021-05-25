import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";

import { Tooltip, Tag } from "antd";
import CustomerSupplierForm from "~/components/Global/Option/CustomerSupplierForm";
const CustomerSupplier = () => {
  const columns = [
    { title: "Customer Supplier", dataIndex: "source" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "modDate" },
    {
      title: "Hidden",
      dataIndex: "srcStatus",
      align: "center",
      render: (srcStatus) => {
        let isHidden = srcStatus % 2 == 0 ? true : false;
        return (
          <div>
            {isHidden ? (
              <Tag color="gray" className="style-tag">
                Hidden
              </Tag>
            ) : (
              <Tag color="#0096c7" className="style-tag">
                Visible
              </Tag>
            )}
          </div>
        );
      },
    },

    {
      render: () => (
        <>
          <CustomerSupplierForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Customer Supplier List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<CustomerSupplierForm showAdd={true} />}
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

export default CustomerSupplier;

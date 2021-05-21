import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";
import { Tag, Tooltip } from "antd";
import DiscountForm from "~/components/Global/Option/DiscountForm";
import SortBox from "~/components/Elements/SortBox";

const Discount = () => {
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      render: (code) => (
        <Tag color="orange">
          <b>{code}</b>
        </Tag>
      ),
    },
    { title: "Price", dataIndex: "price" },
    { title: "Percent", dataIndex: "percent" },
    { title: "Status", dataIndex: "status" },
    { title: "Quantity", dataIndex: "quantity" },
    { title: "Quantity Left", dataIndex: "quantityLeft" },
    { title: "Note", dataIndex: "note" },
    { title: "Expires", dataIndex: "expires" },
    {
      render: () => (
        <>
          <Tooltip title="Cập nhật trung tâm">
            <DiscountForm showIcon={true} />
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
          TitleCard={<DiscountForm showAdd={true} />}
          dataSource={data}
          columns={columns}
          Extra={
            <div className="extra-table">
              <SearchBox />
              {/* <FilterBox /> */}
              <SortBox />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Discount;

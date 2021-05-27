import React from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption2";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import SupplierForm from "~/components/Global/Option/SupplierForm";

const SupplierList = () => {
  const columns = [
    { title: "Supplier", dataIndex: "supplier", ...FilterColumn("supplier") },
    { title: "Modified By", dataIndex: "modBy", ...FilterColumn("modBy") },
    {
      title: "Modified Date",
      dataIndex: "modDate",
      ...FilterDateColumn("modDate"),
    },
    {
      render: () => (
        <>
          <SupplierForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="Supplier List"
      TitleCard={<SupplierForm showAdd={true} />}
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

export default SupplierList;

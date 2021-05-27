import React from "react";
import PowerTable from "~/components/PowerTable";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import { data } from "../../../lib/option/dataOption2";

import IdiomForm from "~/components/Global/Option/IdiomForm";
import { Switch } from "antd";

const Idioms = () => {
  const columns = [
    { title: "Thành ngữ", dataIndex: "idiom" },
    {
      title: "Trạng thái",
      dataIndex: "",
      render: () => <Switch />,
    },
    { title: "Người tạo", dataIndex: "staff" },
    {
      render: () => (
        <>
          <IdiomForm showIcon={true} />{" "}
        </>
      ),
    },
  ];

  return (
    // <div className="row">
    //   <div className="col-12 d-flex justify-content-center">
    <PowerTable
      Size="table-medium"
      TitleCard={<IdiomForm showAdd={true} />}
      dataSource={data}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox />
        </div>
      }
    />
    //   </div>
    // </div>
  );
};

export default Idioms;

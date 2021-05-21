import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../dataOption";
import { Tag, Button, Tooltip, Switch } from "antd";
import ProgramForm from "~/components/Global/Option/ProgramForm";
const Program = () => {
  const columns = [
    { title: "Grade", dataIndex: "grade" },
    { title: "Class", dataIndex: "class" },
    { title: "Price", dataIndex: "price" },
    { title: "Modified By", dataIndex: "rpCreator" },
    { title: "Modified Date", dataIndex: "regDate" },
    {
      title: "Type",
      dataIndex: "status",
      render: (status) => {
        let color = status == "online" ? "green" : "gray";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      render: () => (
        <>
          <ProgramForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Danh sách khối học" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<ProgramForm showAdd={true} />}
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

export default Program;

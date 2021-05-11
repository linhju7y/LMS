import React from "react";
import { Table } from "antd";

const PowerTable = ({ columns, dataSource }) => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default PowerTable;

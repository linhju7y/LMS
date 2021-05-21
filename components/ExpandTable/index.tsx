import React from "react";
import { Table, Card, Button, Input } from "antd";
import TitlePage from "../Elements/TitlePage";

const ExpandTable = (props) => {
  const { Search } = Input;
  return (
    <>
      <TitlePage title={props.TitlePage} />
      <div className="wrap-table">
        <Card
          className="cardRadius"
          title={props.TitleCard}
          extra={props.Extra}
        >
          {props.children}
          <Table
            scroll={{ x: 1000 }}
            columns={props.columns}
            dataSource={props.dataSource}
            expandable={props.expandable}
          />
        </Card>
      </div>
    </>
  );
};

export default ExpandTable;

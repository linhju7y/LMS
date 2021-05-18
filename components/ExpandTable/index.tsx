import React from "react";
import { Table, Card, Button, Input } from "antd";

const ExpandTable = (props) => {
  const { Search } = Input;
  return (
    <>
      <div className="wrap-table">
        <Card
          className="cardRadius"
          title={props.TitleCard}
          extra={props.Extra}
        >
          {props.children}
          <Table
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

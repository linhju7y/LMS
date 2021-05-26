import React from "react";
import { Table, Card, Button, Input } from "antd";
import TitlePage from "../Elements/TitlePage";
import { useAuth } from "~/context/auth";

const ExpandTable = (props) => {
  const { getTitlePage } = useAuth();

  getTitlePage(props.TitlePage);

  const { Search } = Input;

  return (
    <>
      {/* <TitlePage title={props.TitlePage} /> */}
      <div className="wrap-table">
        <Card
          className="cardRadius"
          title={props.Extra}
          extra={props.TitleCard}
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

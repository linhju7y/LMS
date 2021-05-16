import React from "react";
import { Table, Card, Button, Input } from "antd";

const ExpandTable = ({ columns, dataSource, addButton, expandable }) => {
  const { Search } = Input;
  return (
    <>
      <div className="wrap-table">
        <Card
          className="cardRadius"
          title={addButton}
          extra={
            <Search
              placeholder="input search text"
              className="btn-search"
              size="large"
            />
          }
        >
          <Table
            columns={columns}
            dataSource={dataSource}
            expandable={expandable}
          />
        </Card>
      </div>
    </>
  );
};

export default ExpandTable;

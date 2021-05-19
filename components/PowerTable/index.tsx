import React from "react";
import { Table, Card } from "antd";
import TitlePage from "~/components/TitlePage";

const PowerTable = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <TitlePage title={props.TitlePage} />
          <div className="wrap-table">
            <Card
              className="cardRadius"
              title={props.TitleCard}
              extra={props.Extra}
            >
              {props.children}
              <Table
                scroll={{ x: 500 }}
                columns={props.columns}
                dataSource={props.dataSource}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerTable;

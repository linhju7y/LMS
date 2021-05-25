import React from "react";
import { Table, Card } from "antd";
import TitlePage from "~/components/TitlePage";
import { useAuth } from "~/context/auth";

const PowerTable = (props) => {
  const { getTitlePage } = useAuth();

  getTitlePage(props.TitlePage);

  return (
    <>
      <div className="row">
        <div className="col-12">
          {/* <TitlePage title={props.TitlePage} /> */}
          <div className="wrap-table">
            <Card
              className="cardRadius"
              title={props.TitleCard}
              extra={props.Extra}
            >
              {props.children}
              <Table
                scroll={{ x: 800 }}
                columns={props.columns}
                dataSource={props.dataSource}
                size="middle"
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerTable;

import React, { useEffect } from "react";
import { Table, Card } from "antd";
import TitlePage from "~/components/TitlePage";
import { useAuth } from "~/context/auth";

const PowerTable = (props) => {
  const { getTitlePage } = useAuth();

  console.log("Title page: ", props.TitlePage);

  useEffect(() => {
    if (props.TitlePage) {
      getTitlePage(props.TitlePage);
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          {/* <TitlePage title={props.TitlePage} /> */}
          <div className="wrap-table">
            <Card
              className={`cardRadius ${props.Size ? props.Size : ""}`}
              title={props.Extra}
              extra={props.TitleCard}
            >
              {props.children}
              <Table
                bordered={props.haveBorder ? props.haveBorder : false}
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

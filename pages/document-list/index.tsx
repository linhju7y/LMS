import { Card, Input, Space } from "antd";
import React from "react";
import TitlePage from "~/components/Elements/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";

const DocumentList = () => {
  const { Search } = Input;
  return (
    <>
      <div>
        <TitlePage title="Document List" />
      </div>
      <div className="row">
        <div className="col-10">
          <Card>
            <SearchBox />
            Files
          </Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default DocumentList;

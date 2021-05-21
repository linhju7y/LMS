import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";
import InfoForm from "~/components/Global/Option/InfoForm";
import { Input, Tag } from "antd";
import TinyMCE from "~/components/TinyMCE";
import { Info, Layout } from "react-feather";

const InfoFormList = () => {
  const { TextArea } = Input;
  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Note", dataIndex: "note" },
    { title: "Source", dataIndex: "source" },
    { title: "Seller", dataIndex: "staff" },
    {
      title: "Receive",
      dataIndex: "modBy",
      render: (modBy) => (
        <Tag color="#1eae98" className="style-tag">
          {modBy}
        </Tag>
      ),
    },
    {
      render: () => <InfoForm showIcon={true} />,
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Staff Salary " />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<InfoForm showAdd={true} />}
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

export default InfoFormList;

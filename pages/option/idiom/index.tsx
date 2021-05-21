import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";
import IdiomForm from "~/components/Global/Option/IdiomForm";
import { Switch } from "antd";

const Idioms = () => {
  const columns = [
    { title: "Thành ngữ", dataIndex: "idiom" },
    {
      title: "Trạng thái",
      dataIndex: "",
      render: () => <Switch checkedChildren="Show" />,
    },
    { title: "Người tạo", dataIndex: "staff" },
    {
      render: () => (
        <>
          {" "}
          <IdiomForm showIcon={true} />{" "}
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Staff Salary " />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<IdiomForm showAdd={true} />}
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

export default Idioms;

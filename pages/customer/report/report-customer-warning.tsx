import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "./../dataCustomer";

export default function ReportWarning() {
  const expandedRowRender = () => {
    <></>;
  };
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Lớp", dataIndex: "rpCourse" },
    { title: "Ngày tạo", dataIndex: "testDate" },
    { title: "Người tạo", dataIndex: "rpCreator" },
    { title: "Chủ nhiệm", dataIndex: "rpLeader" },
    {
      title: "",
      render: () => <Button type="link" icon={<Eye />} />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách học viên bị cảnh báo" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            dataSource={dataService}
            columns={columns}
            expandable={{ expandedRowRender }}
            Extra={
              <div className="extra-table">
                <SearchBox />
                <button className="btn btn-secondary light btn-filter">
                  <Filter />
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

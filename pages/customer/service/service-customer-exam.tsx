import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, Filter } from "react-feather";
import { Button, Tag } from "antd";
import SearchBox from "~/components/Elements/SearchBox";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Đợt thi", dataIndex: "testTime" },
    {
      title: "Loại",
      dataIndex: "typeTest",
      render: (typeTest) => {
        let color = typeTest == "Thi thử" ? "green" : "blue";
        return (
          <Tag color={color} key={typeTest}>
            <b> {typeTest.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Nhà cung cấp", dataIndex: "provider" },
    { title: "Giá tiền", dataIndex: "testCost" },
    { title: "Ngày thi", dataIndex: "testDate" },
    { title: "Ngày đăng kí", dataIndex: "regDate" },
    {
      title: "",
      render: () => <Button type="link" icon={<Eye />} />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách đăng kí thi" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PowerTable
            dataSource={dataService}
            columns={columns}
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
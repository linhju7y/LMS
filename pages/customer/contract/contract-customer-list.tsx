import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, Filter } from "react-feather";
import { Button, Tag } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "../../../lib/customer/dataCustomer";

export default function ContractList() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    {
      title: "Trạng thái",
      dataIndex: "cntStatus",
      render: (cntStatus) => {
        let color = cntStatus == "Đã có hợp đồng" ? "cyan" : "red";
        return (
          <Tag color={color} key={cntStatus}>
            <b> {cntStatus.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Ngày tạo", dataIndex: "regDate" },
    {
      title: "",
      render: () => (
        <>
          <Button type="link" icon={<Eye />} />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách học viên có hợp đồng" />
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

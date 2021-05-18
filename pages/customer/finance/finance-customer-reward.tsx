import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Filter } from "react-feather";
import { Tag, Image } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "./../dataCustomer";

export default function FinanceReward() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Khen thưởng",
      dataIndex: "fnReward",
      render: (fnReward) => {
        let color = fnReward == "Tài trợ thi lại" ? "cyan" : "blue";
        return (
          <Tag color={color} key={fnReward}>
            <b> {fnReward.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Người tạo", dataIndex: "rpCreator" },
    { title: "Người duyệt", dataIndex: "rpLeader" },
    { title: "Điểm khóa học", dataIndex: "speaking" },
    { title: "Điểm đạt được", dataIndex: "overall" },
    {
      title: "Trạng thái",
      dataIndex: "fnStatus",
      render: (fnStatus) => {
        let color = fnStatus == "Duyệt" ? "green" : "red";
        return (
          <Tag color={color} key={fnStatus}>
            <b> {fnStatus.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "QR Code",
      render: () => (
        <>
          <Image alt="" />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách khen thưởng" />
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

import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Filter } from "react-feather";
import { Tag, Image } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "../../../lib/customer/dataCustomer";

export default function FinanceReward() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Khen thưởng",
      dataIndex: "fnReward",
      align: "center",
      render: (fnReward) => {
        let color = fnReward == "Tài trợ thi lại" ? "#00b2ca" : "#7dcfb6";
        return (
          <Tag color={color} key={fnReward} className="style-tag">
            {fnReward.toUpperCase()}
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
      align: "center",
      render: (fnStatus) => {
        let color = fnStatus == "Duyệt" ? "#3590f3" : "#ea3546";
        return (
          <Tag color={color} key={fnStatus} className="style-tag">
            {fnStatus.toUpperCase()}
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

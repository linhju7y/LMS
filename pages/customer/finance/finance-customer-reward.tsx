import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Image } from "antd";
import SortBox from "~/components/Elements/SortBox";
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
        return (
          <>
            {fnReward == "Trao thưởng đạt đầu ra" ? (
              <span className="tag blue">{fnReward}</span>
            ) : (
              <span className="tag blue-weight">{fnReward}</span>
            )}
          </>
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
        return (
          <>
            {fnStatus == "Duyệt" ? (
              <span className="tag blue">{fnStatus}</span>
            ) : (
              <span className="tag red">{fnStatus}</span>
            )}
          </>
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
                <SortBox dataOption={dataService} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

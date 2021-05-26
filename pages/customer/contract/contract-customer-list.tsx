import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye } from "react-feather";
import { Tooltip } from "antd";
import { dataService } from "../../../lib/customer/dataCustomer";
import SortBox from "~/components/Elements/SortBox";

export default function ContractList() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    {
      title: "Trạng thái",
      dataIndex: "cntStatus",
      render: (cntStatus) => {
        return (
          <>
            {cntStatus == "Đã có hợp đồng" ? (
              <span className="tag green">{cntStatus}</span>
            ) : (
              <span className="tag red">{cntStatus}</span>
            )}
          </>
        );
      },
    },
    { title: "Ngày tạo", dataIndex: "regDate" },
    {
      title: "",
      render: () => (
        <>
          <Tooltip title="Xem chi tiết">
            <button className="btn btn-icon view">
              <Eye />
            </button>
          </Tooltip>
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
                <SortBox dataOption={dataService} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

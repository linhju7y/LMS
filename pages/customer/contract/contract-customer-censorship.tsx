import React, { useState } from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Edit, Printer } from "react-feather";
import { Switch, Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";

export default function ContractCensorship() {
  const expandedRowRender = () => {
    <></>;
  };
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    {
      title: "Trạng thái",

      render: () => {
        const [censorShipStatus, setCensorShipStatus] =
          useState("Not accepted");
        function onChange(checked) {
          if (checked == true) {
            setCensorShipStatus("Accepted");
          } else setCensorShipStatus("Not accepted");
        }
        return (
          <>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  {censorShipStatus == "Accepted" ? (
                    <span className="tag green">{censorShipStatus}</span>
                  ) : (
                    <span className="tag red">{censorShipStatus}</span>
                  )}
                </div>
                <div className="col-6">
                  <Switch onChange={onChange} />
                </div>
              </div>
            </div>
          </>
        );
      },
    },
    { title: "Ngày tạo", dataIndex: "testDate" },
    { title: "Người tạo", dataIndex: "apmConsultant" },
    {
      title: "",
      render: () => (
        <>
          <Tooltip title="Chỉnh sửa">
            <button className="btn btn-icon exchange">
              <Edit />
            </button>
          </Tooltip>
          <Tooltip title="In hợp đồng">
            <button className="btn btn-icon">
              <Printer />
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
          <TitlePage title="Duyệt hợp đồng học viên" />
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
                <SortBox dataOption={dataService} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

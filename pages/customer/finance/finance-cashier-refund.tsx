import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { DollarSign, Filter } from "react-feather";
import { Button, Tag } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "../../../lib/customer/dataCustomer";

export default function FinanceRefund() {
  const expandedRowRender = () => {
    <></>;
  };
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Nguồn", dataIndex: "source" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Số tiền", dataIndex: "cost" },
    {
      title: "Trạng thái",
      dataIndex: "fnStatus",
      render: (fnStatus) => {
        let color = fnStatus == "Duyệt" ? "green" : "volcano";
        return (
          <Tag color={color} key={fnStatus}>
            <b> {fnStatus.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "",
      render: () => (
        <>
          <Button type="link" icon={<DollarSign />} />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách yêu cầu hoàn tiền" />
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

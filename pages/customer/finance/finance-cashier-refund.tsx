import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Tag } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import { ExpandBoxService } from "~/components/Elements/ExpandBox";
import RefundForm from "~/components/Global/Customer/Finance/RefundForm";

export default function FinanceRefund() {
  const expandedRowRender = () => <ExpandBoxService />;

  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Nguồn", dataIndex: "source" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Số tiền", dataIndex: "cost" },
    {
      title: "Trạng thái",
      dataIndex: "fnStatus",
      align: "center",
      render: (fnStatus) => {
        return (
          <>
            {fnStatus == "Duyệt" ? (
              <span className="tag green">{fnStatus}</span>
            ) : (
              <span className="tag red">{fnStatus}</span>
            )}
          </>
        );
      },
    },
    {
      title: "",
      render: () => (
        <>
          <RefundForm />
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
                <SortBox dataOption={dataService} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

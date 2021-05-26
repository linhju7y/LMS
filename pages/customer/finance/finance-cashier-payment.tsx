import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { ShoppingCart, Filter } from "react-feather";
import { Image } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";

import ConsultantForm from "~/components/Global/Customer/Finance/ConsultantForm";

export default function FinancePayment() {
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Số tiền", dataIndex: "cost" },
    { title: "Lý do", dataIndex: "fnReasonPayment" },
    { title: "Ngày giờ tạo", dataIndex: "regDate" },
    {
      title: "QR Code",
      render: () => (
        <>
          <Image alt="" />
        </>
      ),
    },
    {
      title: "",
      render: () => (
        <>
          <ConsultantForm />
          <button className="btn btn-icon exchange">
            <ShoppingCart />
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách phiếu chi" />
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

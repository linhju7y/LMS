import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Edit, ShoppingCart, XCircle, Filter } from "react-feather";
import { Button, Image } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "./../dataCustomer";
import ConsultantForm from "~/components/Global/Customer/Finance/ConsultantForm";

export default function FinanceInvoice() {
  const columns = [
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Số tiền", dataIndex: "cost" },
    { title: "Lý do", dataIndex: "fnReason" },
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
          <Button type="link" icon={<ShoppingCart />} />
          <Button type="link" icon={<XCircle />} />
        </>
      ),
    },
    ``,
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách phiếu thu" />
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

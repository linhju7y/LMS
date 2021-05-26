import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import PaymentService from "~/components/Global/Customer/Service/PaymentService";

export default function CustomerServicePackage() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Tên set", dataIndex: "pkgName" },
    { title: "Giá tiền", dataIndex: "testCost" },
    { title: "Giảm giá", dataIndex: "pkgDiscount" },
    { title: "Ngày mua", dataIndex: "apmDate" },
    {
      title: "Trạng thái",
      dataIndex: "pgkPayment",
      render: (pgkPayment) => {
        return (
          <>
            {pgkPayment == "Đã thanh toán" ? (
              <span className="tag green">{pgkPayment}</span>
            ) : (
              <span className="tag red">{pgkPayment}</span>
            )}
          </>
        );
      },
    },
    {
      title: "",
      render: () => <PaymentService />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách học viên mua gói" />
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

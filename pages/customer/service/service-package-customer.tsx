import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, Filter } from "react-feather";
import { Button, Tag, Select } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "./../dataCustomer";
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
        let color = pgkPayment == "Đã thanh toán" ? "blue" : "volcano";
        return (
          <Tag color={color} key={pgkPayment}>
            <b> {pgkPayment.toUpperCase()}</b>
          </Tag>
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

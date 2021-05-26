import React from "react";
import PowerTable from "~/components/PowerTable";
import { Image, Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";
import ConsultantForm from "~/components/Global/Customer/Finance/ConsultantForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import { ShoppingCart } from "react-feather";

export default function FinancePayment() {
  const columns = [
    { title: "Trung tâm", dataIndex: "center", ...FilterColumn("center") },
    {
      title: "Học viên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
    },
    { title: "Số điện thoại", dataIndex: "tel", ...FilterColumn("tel") },
    { title: "Số tiền", dataIndex: "cost", ...FilterColumn("cost") },
    {
      title: "Lý do",
      dataIndex: "fnReasonPayment",
      ...FilterColumn("fnReasonPayment"),
    },
    {
      title: "Ngày giờ tạo",
      dataIndex: "regDate",
      ...FilterDateColumn("regDate"),
    },
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
          <Tooltip title="Xuất phiếu chi">
            <button className="btn btn-icon exchange">
              <ShoppingCart />
            </button>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <PowerTable
      TitlePage="Danh sách phiếu chi"
      dataSource={dataService}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox dataOption={dataService} />
        </div>
      }
    />
  );
}

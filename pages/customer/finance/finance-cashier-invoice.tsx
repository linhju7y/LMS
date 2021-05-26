import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { ShoppingCart, XCircle } from "react-feather";
import { Image, Tooltip } from "antd";
import { dataService } from "../../../lib/customer/dataCustomer";
import Link from "next/link";
import SortBox from "~/components/Elements/SortBox";
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
          <Link
            href={{
              pathname: "/customer/finance/invoice/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Xuất phiếu thu">
              <button className="btn btn-icon exchange">
                <ShoppingCart />
              </button>
            </Tooltip>
          </Link>
          <Tooltip title="Xóa phiếu thu">
            <button className="btn btn-icon delete">
              <XCircle />
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
                <SortBox dataOption={dataService} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

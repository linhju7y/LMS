import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Tooltip } from "antd";
import { dataService } from "../../../lib/customer/dataCustomer";
import SortBox from "~/components/Elements/SortBox";
import { ExpandBoxService } from "~/components/Elements/ExpandBox";
import Link from "next/link";
import RegRefund from "~/components/Global/Customer/Student/RegRefund";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";

export default function CustomerService() {
  const expandedRowRender = () => {
    return <ExpandBoxService />;
  };

  const columns = [
    {
      title: "Học viên",
      dataIndex: "nameStudent",
      ...FilterColumn("nameStudent"),
    },
    { title: "Dịch vụ", dataIndex: "service", ...FilterColumn("service") },
    { title: "Giá tiền", dataIndex: "cost", ...FilterColumn("cost") },
    {
      title: "Nhà cung cấp",
      dataIndex: "provider",
      ...FilterColumn("provider"),
    },
    {
      title: "",
      render: () => (
        <>
          <Link
            href={{
              pathname: "/customer/student/detail/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Xem chi tiết">
              <button className="btn btn-icon view">
                <Eye />
              </button>
            </Tooltip>
          </Link>

          <RegRefund />
        </>
      ),
    },
  ];

  return (
    <ExpandTable
      TitlePage="Khách mua dịch vụ"
      expandable={{ expandedRowRender }}
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

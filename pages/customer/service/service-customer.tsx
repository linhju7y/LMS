import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Select, Tooltip } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "../../../lib/customer/dataCustomer";

import { ExpandBoxService } from "~/components/Elements/ExpandBox";
import Link from "next/link";
import RegRefund from "~/components/Global/Customer/Student/RegRefund";

export default function CustomerService() {
  const expandedRowRender = () => {
    return <ExpandBoxService />;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Dịch vụ", dataIndex: "service" },
    { title: "Giá tiền", dataIndex: "cost" },
    { title: "Nhà cung cấp", dataIndex: "provider" },
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
              <button className="btn btn-icon">
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách học viên mua dịch vụ" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
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

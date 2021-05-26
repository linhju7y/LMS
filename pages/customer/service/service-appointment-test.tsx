import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, CheckCircle, XCircle } from "react-feather";
import { Tooltip } from "antd";
import SortBox from "~/components/Elements/SortBox";
import { dataService } from "../../../lib/customer/dataCustomer";

import Link from "next/link";
import TestInfo from "~/components/Global/Customer/Service/TestInfo";
import { ExpandBoxService } from "~/components/Elements/ExpandBox";
export default function AppointmentServiceTest() {
  const expandedRowRender = () => {
    return <ExpandBoxService />;
  };
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Nguồn", dataIndex: "source" },
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Người hẹn", dataIndex: "apmConsultant" },
    { title: "Ngày hẹn", dataIndex: "apmDate" },
    { title: "Giờ hẹn", dataIndex: "apmTime" },
    {
      title: "Xong",
      dataIndex: "apmStatus",
      align: "center",
      render: (apmStatus) => {
        let color = apmStatus == "Xong" ? "green" : "red";
        if (apmStatus == "Xong") {
          return <CheckCircle color={color} />;
        } else return <XCircle color={color} />;
      },
    },
    {
      title: "Đã đăng kí",
      dataIndex: "apmReg",
      align: "center",
      render: (apmReg) => {
        return (
          <>
            {apmReg == "Đã đăng kí" ? (
              <span className="tag blue">{apmReg}</span>
            ) : (
              <span className="tag black">{apmReg}</span>
            )}
          </>
        );
      },
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

          <TestInfo />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách khách hẹn test" />
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

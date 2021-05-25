import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, CheckCircle, Filter } from "react-feather";
import { Button } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "../../../lib/customer/dataCustomer";

import Link from "next/link";
import Tuition from "~/components/Global/Customer/Finance/Tuition";

export default function FinanceDebts() {
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    { title: "Trung tâm", dataIndex: "center" },
    { title: "Số tiền", dataIndex: "cost" },
    { title: "Ngày hẹn thu", dataIndex: "apmDate" },
    { title: "Ngày nhập học", dataIndex: "testDate" },
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
            <Button type="link" icon={<Eye />} />
          </Link>
          <Tuition />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="danh sách học viên nợ học phí" />
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

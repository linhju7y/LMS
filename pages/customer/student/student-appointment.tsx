import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { data4 } from "../../../lib/customer-student/data";

import ExpandBox from "~/components/Elements/ExpandBox";
import RegInfo from "~/components/Global/Customer/Student/RegInfo";
import RegCancel from "~/components/Global/Customer/Student/RegCancel";
import RegRefund from "~/components/Global/Customer/Student/RegRefund";

export default function StudentAppointment() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <ExpandBox />;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "nameStudent" },
    { title: "Giá tiền", dataIndex: "center" },
    { title: "Đã đóng", dataIndex: "class" },
    { title: "Giảm giá", dataIndex: "time" },
    { title: "Còn lại", dataIndex: "deposit" },
    {
      title: "",
      render: () => (
        <>
          <RegInfo />
          <RegCancel />
          <RegRefund />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="học viên HẸN ĐĂNG KÍ" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data4}
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

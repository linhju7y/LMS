import React from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Select } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { data5 } from "./data";
import ExpandBox from "~/components/Elements/ExpandBox";
import RegInfo from "~/components/Global/Customer/Student/RegInfo";
import ReserveChangeCourse from "~/components/Global/Customer/Student/ReserveChangeCourse";
import RegCancel from "~/components/Global/Customer/Student/RegCancel";

export default function StudentReserve() {
  const expandedRowRender = () => {
    const { Option } = Select;
    return <ExpandBox />;
  };

  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Tỉnh/TP", dataIndex: "city" },
    { title: "Giá tiền", dataIndex: "center" },
    { title: "Đã đóng", dataIndex: "class" },
    { title: "Giảm giá", dataIndex: "time" },
    { title: "Còn lại", dataIndex: "reserve" },
    {
      title: "",
      render: () => (
        <>
          <RegInfo />
          <ReserveChangeCourse />
          <RegCancel />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Học viên bảo lưu" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data5}
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

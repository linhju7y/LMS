import React, { useState } from "react";
import TitlePage from "~/components/TitlePage";
import ExpandTable from "~/components/ExpandTable";
import { Edit, Printer, Filter } from "react-feather";
import { Button, Switch, Tag } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "./../dataCustomer";

export default function ContractCensorship() {
  const expandedRowRender = () => {
    <></>;
  };
  const columns = [
    { title: "Học viên", dataIndex: "nameStudent" },
    { title: "Khóa học", dataIndex: "rpCourse" },
    {
      title: "Trạng thái",

      render: () => {
        const [censorShipStatus, setCensorShipStatus] =
          useState("Not accepted");
        function onChange(checked) {
          if (checked == true) {
            setCensorShipStatus("accepted");
          } else setCensorShipStatus("Not accepted");
        }
        let color = censorShipStatus == "accepted" ? "blue" : "volcano";
        return (
          <>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <Tag color={color} key={censorShipStatus} className="pl-2">
                    <b> {censorShipStatus.toLocaleUpperCase()} </b>
                  </Tag>
                </div>
                <div className="col-6">
                  <Switch onChange={onChange} />
                </div>
              </div>
            </div>
          </>
        );
      },
    },
    { title: "Ngày tạo", dataIndex: "testDate" },
    { title: "Người tạo", dataIndex: "apmConsultant" },
    {
      title: "",
      render: () => (
        <>
          <Button type="link" icon={<Edit />} />
          <Button type="link" icon={<Printer />} />
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Duyệt hợp đồng học viên" />
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

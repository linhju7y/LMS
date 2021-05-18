import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Filter } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import { dataService } from "./../dataCustomer";

export default function CustomerServiceResult() {
  const columns = [
    { title: "Ngày", dataIndex: "testDate" },
    { title: "Họ và tên", dataIndex: "nameStudent" },
    { title: "Số điện thoại", dataIndex: "tel" },
    { title: "Test", dataIndex: "pkgName" },
    { title: "Skills", dataIndex: "pkgSkill" },
    {
      title: "Listening",
      dataIndex: "listening",
      render: (listening) => {
        return (
          <Tag color={"default"} key={listening}>
            <b> {listening}</b>
          </Tag>
        );
      },
    },
    {
      title: "Reading",
      dataIndex: "reading",
      render: (reading) => {
        return (
          <Tag color={"default"} key={reading}>
            <b> {reading}</b>
          </Tag>
        );
      },
    },
    {
      title: "Writing",
      dataIndex: "writing",
      render: (writing) => {
        return (
          <Tag color={"default"} key={writing}>
            <b> {writing}</b>
          </Tag>
        );
      },
    },
    {
      title: "Speaking",
      dataIndex: "speaking",
      render: (speaking) => {
        return (
          <Tag color={"default"} key={speaking}>
            <b> {speaking}</b>
          </Tag>
        );
      },
    },
    {
      title: "Overall",
      dataIndex: "overall",
      render: (overall) => {
        return (
          <Tag color={"cyan"} key={overall}>
            <b> {overall}</b>
          </Tag>
        );
      },
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách kết quả test" />
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

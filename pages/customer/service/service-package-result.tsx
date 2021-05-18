import React from "react";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";
import { Eye, CheckCircle, XCircle } from "react-feather";
import { Button, Card, Tag, Form, Input, Select } from "antd";

import { dataService } from "./../dataCustomer";

export default function CustomerServiceExam() {
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
          <TitlePage title="danh sách học viên" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PowerTable dataSource={dataService} columns={columns} />
        </div>
      </div>
    </div>
  );
}

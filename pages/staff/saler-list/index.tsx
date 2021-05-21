import React, { useState } from "react";
import { Table, Card, Tag } from "antd";
import { FormOutlined, EyeOutlined } from "@ant-design/icons";
import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import ModalAdd from "~/components/Global/SalerList/ModalAdd";

const dataSource = [];

for (let i = 0; i < 50; i++) {
  dataSource.push({
    key: i,
    Place: "Hồ Chí Minh",
    NameStaff: "Nguyễn An",
    NumberPhone: "012345678",
    Email: "annguyen97dev@gmail.com",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  });
}

const columns = [
  {
    title: "Tỉnh/TP",
    dataIndex: "Place",
    key: "center",
  },
  {
    title: "Họ và tên",
    dataIndex: "NameStaff",
    key: "namestaff",
  },
  {
    title: "SĐT",
    dataIndex: "NumberPhone",
    key: "numberphone",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
  },

  {
    title: "Trạng thái",
    dataIndex: "Status",
    key: "status",
    align: "center",
    render: (Status) => (
      <Tag className="style-tag active" color="green">
        Active
      </Tag>
    ),
  },
  {
    title: "Ngày nhận việc",
    dataIndex: "StartDay",
    key: "startday",
  },
  {
    title: "Thao tác",
    dataIndex: "Action",
    key: "action",
    align: "center",
    render: (Action) => (
      <Link
        href={{
          pathname: "/staff/saler-list/saler-detail/[slug]",
          query: { slug: 2 },
        }}
      >
        <a className="btn btn-icon">
          <EyeOutlined />
        </a>
      </Link>
    ),
  },
];

const SalerList = () => {
  return (
    <>
      {/* <div className="row">
        <div className="col-12">
          <TitlePage title={"Danh sách nhân viên"} />
          <div className="wrap-table">
            <Card
              className="cardRadius"
              title={<button className="btn btn-primary">Thêm mới</button>}
              extra={<SearchBox />}
            >
              <Table dataSource={dataSource} columns={columns} />
            </Card>
          </div>
        </div>
      </div> */}

      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Danh sách Salers"
        TitleCard={<ModalAdd />}
        Extra={<SearchBox />}
      />
    </>
  );
};

export default SalerList;

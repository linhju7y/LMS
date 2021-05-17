import React, { useState } from "react";
import { Table, Card, Tag } from "antd";
import { FormOutlined, EyeOutlined } from "@ant-design/icons";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";

const dataSource = [
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
  {
    key: "1",
    Center: "ZIM – 65 Yên Lãng",
    NameStaff: "Nguyễn An",
    Account: "annguyen97dev",
    Email: "annguyen97dev@gmail.com",
    Position: "Dev",
    Status: "",
    StartDay: "03/05/2021",
    Action: "",
  },
];

const columns = [
  {
    title: "Trung tâm",
    dataIndex: "Center",
    key: "center",
  },
  {
    title: "Họ và tên",
    dataIndex: "NameStaff",
    key: "namestaff",
  },
  {
    title: "Tài khoản",
    dataIndex: "Account",
    key: "account",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
  },
  {
    title: "Chức vụ",
    dataIndex: "Position",
    key: "position",
  },
  {
    title: "Trạng thái",
    dataIndex: "Status",
    key: "status",
    render: (Status) => <Tag color="green">Active</Tag>,
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
    render: (Action) => (
      <Link
        href={{
          pathname: "/staff/staff-list/detail/[slug]",
          query: { slug: 2 },
        }}
      >
        <a className="btn btn-primary">View</a>
      </Link>
    ),
  },
];

const TeacherList = () => {
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
        TitlePage="Danh sách nhân viên"
        TitleCard={<button className="btn btn-primary">Thêm mới</button>}
        Extra={<SearchBox />}
      />
    </>
  );
};

export default TeacherList;

import React from "react";
import PropTypes from "prop-types";
import TitlePage from "~/components/Elements/TitlePage";
import { Table, Card, Switch } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import SortBox from "~/components/Elements/SortBox";
import { Check } from "react-feather";
import Link from "next/link";

const data = [];

function onChange_Show(checked) {
  console.log(`switch to ${checked}`);
}

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    Thumbnail: "",
    Name: "IELTS Practice Test 10",
    Type: "Free",
    Listening: true,
    Reading: false,
    Writting: true,
    Speaking: false,
    Status: "",
    DateCreated: "25/02/2021",
    Action: "",
  });
}

const columns = [
  {
    title: "Thumbnail",
    dataIndex: "Thumbnail",
    key: "thumbnail",
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "type",
  },
  {
    title: "SET options",
    children: [
      {
        title: "Listening",
        dataIndex: "Listening",
        key: "listening",
        render: (Listening) =>
          Listening ? (
            <Check className="icon-check" />
          ) : (
            <p className="text-no-ques">No question</p>
          ),
      },
      {
        title: "Reading",
        dataIndex: "Reading",
        key: "reading",
        render: (Reading) =>
          Reading ? (
            <Check className="icon-check" />
          ) : (
            <p className="text-no-ques">No question</p>
          ),
      },
      {
        title: "Writting",
        dataIndex: "Writting",
        key: "writting",
        render: (Writting) =>
          Writting ? (
            <Check className="icon-check" />
          ) : (
            <p className="text-no-ques">No question</p>
          ),
      },
      {
        title: "Speaking",
        dataIndex: "Speaking",
        key: "speaking",
        render: (Speaking) =>
          Speaking ? (
            <Check className="icon-check" />
          ) : (
            <p className="text-no-ques">No question</p>
          ),
      },
    ],
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "status",
    render: () => (
      <Switch
        checkedChildren="Show"
        unCheckedChildren="Show"
        defaultChecked
        onChange={onChange_Show}
      />
    ),
  },
  {
    title: "Date created",
    dataIndex: "DateCreated",
    key: "datecreated",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    render: () => (
      <Link href="/">
        <a className="btn btn-success">Chi tiết</a>
      </Link>
    ),
  },
];

const PackageList = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Danh sách gói bài tập" />
        <Card
          title={
            <Link href="/package/package-create">
              <a className="btn btn-primary">Tạo gói mới</a>
            </Link>
          }
          extra={
            <div className="extra-table">
              <SortBox />
              <SortBox space={true} />
              <SearchBox />
            </div>
          }
        >
          <div className="wrap-table package-list-table">
            <Table
              size="middle"
              bordered
              dataSource={data}
              columns={columns}
              scroll={{ x: "1200" }}
            ></Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

PackageList.propTypes = {};

export default PackageList;

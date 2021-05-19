import React, { useState } from "react";
import { Table, Card, Tag } from "antd";

import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { Filter } from "react-feather";
import FilterTable from "~/components/Global/CostList";

const dataSource = [
  {
    key: "1",
    Start: "21/12/2021",
    End: "31/12/2021",
    TotalDay: "10",
    Note: "Nothing",
    Action: "",
  },
];

const columns = [
  {
    title: "Start",
    dataIndex: "Start",
    key: "start",
  },
  {
    title: "End",
    dataIndex: "End",
    key: "end",
  },
  {
    title: "Total Day",
    dataIndex: "TotalDay",
    key: "totalday",
  },
  {
    title: "Note",
    dataIndex: "Note",
    key: "checker",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    render: () => (
      <Link
        href={{
          pathname: "/staff/campaign-sales/[slug]",
          query: { slug: 2 },
        }}
      >
        <a className="btn btn-primary">View</a>
      </Link>
    ),
  },
];

const CostList = () => {
  const [showFilter, showFilterSet] = useState(false);
  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Giá vốn hàng bán"
        TitleCard=""
        Extra={
          <div className="extra-table">
            <SortBox />
            <SearchBox />
          </div>
        }
      ></PowerTable>
    </>
  );
};

export default CostList;

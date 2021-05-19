import React, { useState } from "react";
import { Input, Modal } from "antd";

import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { Filter } from "react-feather";
import FilterTable from "~/components/Global/CostList";

const { TextArea } = Input;
const dataSource = [
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
  {
    key: "1",
    FullName: "Nguyễn An",
    Camp: "Something",
    Money: "4,500,000",
    Note: "Text",
    CreatedDate: "20/05/2020",
    CreatedPeople: "Hùng Nguyễn",
  },
];

const columns = [
  {
    title: "Họ và tên",
    dataIndex: "FullName",
    key: "fullname",
  },
  {
    title: "Chiến dịch",
    dataIndex: "Camp",
    key: "Camp",
  },
  {
    title: "Số tiền",
    dataIndex: "Money",
    key: "money",
  },
  {
    title: "Ghi chú",
    dataIndex: "Note",
    key: "note",
  },
  {
    title: "Ngày tạo",
    dataIndex: "CreatedDate",
    key: "createddate",
  },
  {
    title: "Người tạo",
    dataIndex: "CreatedPeople",
    key: "createdpeople",
  },
];

const SalaryHistory = () => {
  const [showFilter, showFilterSet] = useState(false);
  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Danh sách lương đã duyệt"
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

export default SalaryHistory;

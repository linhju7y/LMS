import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../dataOption2";
import ExamForm from "~/components/Global/Option/ExamForm";
import SortBox from "~/components/Elements/SortBox";

const Exam = () => {
  const columns = [
    { title: "Center", dataIndex: "center" },
    { title: "Supplier", dataIndex: "supplier" },
    { title: "Exam", dataIndex: "exam" },
    { title: "Official Exam" },
    { title: "Date", dataIndex: "expires" },
    { title: "Slot", dataIndex: "slot" },
    { title: "Price", dataIndex: "price" },
    { title: "Hour", dataIndex: "hour" },
    {
      render: () => (
        <>
          <ExamForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Exams List" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<ExamForm showAdd={true} />}
          dataSource={data}
          columns={columns}
          Extra={
            <div className="extra-table">
              <SearchBox />
              {/* <FilterBox /> */}
              <SortBox />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Exam;

import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";

import TeacherSalaryForm from "~/components/Global/Option/TeacherSalaryForm";

const TeacherSalary = () => {
  const columns = [
    { title: "Full name", dataIndex: "teacher" },
    { title: "Username", dataIndex: "userNameStaff" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "staffRole" },
    { title: "Salary", dataIndex: "price" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "modDate" },
    {
      render: () => (
        <>
          <TeacherSalaryForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Teacher Salary" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<TeacherSalaryForm showAdd={true} />}
          dataSource={data}
          columns={columns}
          Extra={
            <div className="extra-table">
              <SearchBox />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TeacherSalary;

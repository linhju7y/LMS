import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";
import StaffSalaryForm from "~/components/Global/Option/StaffSalaryForm";

const StaffSalary = () => {
  const columns = [
    { title: "Full name", dataIndex: "staff" },
    { title: "Username", dataIndex: "userNameStaff" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "staffRole" },
    { title: "Salary", dataIndex: "price" },
    { title: "Modified By", dataIndex: "modBy" },
    { title: "Modified Date", dataIndex: "modDate" },
    {
      render: () => (
        <>
          <StaffSalaryForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Staff Salary " />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={<StaffSalaryForm showAdd={true} />}
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

export default StaffSalary;

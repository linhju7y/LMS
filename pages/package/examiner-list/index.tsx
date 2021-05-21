import React from "react";
import { data } from "~/components/Dashboard/data";
import PowerTable from "~/components/PowerTable";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ModalAdd from "~/components/Global/ExaminerList/ModalAdd";

const dataSource = [];

for (let i = 0; i < 50; i++) {
  dataSource.push({
    key: i,
    TeacherName: "Vân Anh",
    TeacherPhone: "01208399931",
    Action: "",
  });
}

const columns = [
  {
    title: "Teacher Name",
    dataIndex: "TeacherName",
    key: "teachername",
  },
  {
    title: "Teacher Phone",
    dataIndex: "TeacherPhone",
    key: "teacherphone",
  },
  {
    title: "",
    dataIndex: "Action",
    key: "action",
    align: "center",
    width: "50px",
    render: () => (
      <button className="btn btn-icon delete">
        <DeleteOutlined />
      </button>
    ),
  },
];

const ExaminerList = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <PowerTable
            dataSource={dataSource}
            columns={columns}
            TitlePage="List Examiner"
            Extra={<ModalAdd />}
          />
        </div>
      </div>
    </>
  );
};

export default ExaminerList;

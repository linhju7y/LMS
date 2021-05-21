import React from "react";
import { Tag } from "antd";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption2";
import NotificationForm from "~/components/Global/Option/NotificationForm";
import ExpandTable from "~/components/ExpandTable";
import { CheckCircle, XCircle } from "react-feather";

const Notification = () => {
  const expandedRowRender = () => {
    return (
      <div>
        Tuần tới đội chuyên môn HN sẽ họp tại tầng 8 CS Thái Hà. Thời gian: 10h
        sáng thứ 2 (26/10) Nội dung: Phát triển trong môi trường ZIM và những kĩ
        năng cần thiết.
      </div>
    );
  };
  const columns = [
    { title: "Date", dataIndex: "expires" },
    {
      title: "Role",
      dataIndex: "teacher",
      render: (teacher) => (
        <Tag key={teacher} color="#0077b6" className="style-input">
          {teacher.toUpperCase()}
        </Tag>
      ),
    },
    { title: "Center", dataIndex: "center" },
    {
      title: "Email",
      dataIndex: "postStatus",
      render: (postStatus) => {
        if (postStatus % 2 == 0) {
          return <CheckCircle color="#06d6a0" />;
        }
      },
    },
    { title: "Title", dataIndex: "title" },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Staff Salary " />
      </div>
      <div className="col-12">
        <ExpandTable
          expandable={{ expandedRowRender }}
          TitleCard={<NotificationForm showAdd={true} />}
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

export default Notification;

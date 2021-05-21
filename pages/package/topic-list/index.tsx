import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ExpandTable from "~/components/ExpandTable";
import { Switch } from "antd";
import { data } from "~/components/Dashboard/data";
import PowerTable from "~/components/PowerTable";
import TopicModal from "~/components/Global/TopicList/TopicModal";
import QuestionModal from "~/components/Global/TopicList/QuestionModal";

const QuestionList = () => {
  let dataSource = [];
  for (let i = 0; i < 50; i++) {
    dataSource.push({
      key: i,
      STT: i,
      PartTask: "Task" + i,
      Question:
        "IELTS Writing Task 1You should spend about 20 minutes on this task.The line graph below shows the oil production and consumption in China between 1982",
      Action: "",
    });
  }

  let columns = [
    {
      title: "No.",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Part/Task",
      dataIndex: "PartTask",
      key: "parttask",
    },
    {
      title: "Question",
      dataIndex: "Question",
      key: "question",
    },
    {
      title: "Action",
      dataIndex: "action",
      ket: "action",
      align: "center",
      width: "150px",
      render: () => (
        <>
          <QuestionModal showIcon={true} />

          <button className="btn btn-icon delete">
            <DeleteOutlined />
          </button>
        </>
      ),
    },
  ];

  return (
    <PowerTable
      dataSource={dataSource}
      columns={columns}
      TitleCard="List Question"
      Extra={<QuestionModal showBtn={true} />}
    />
  );
};

const TopicList = () => {
  let dataSource = [];

  for (let i = 0; i < 50; i++) {
    dataSource.push({
      key: i,
      TopicName: "Topic 1",
      TopicDes: "IELTS Writing & Speaking Practice Test 1",
      Status: "",
      Action: "",
    });
  }

  let columns = [
    {
      title: "Topic Name",
      dataIndex: "TopicName",
      key: "topicname",
    },
    {
      title: "Topic Description",
      dataIndex: "TopicDes",
      key: "topicdes",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "status",
      render: () => (
        <Switch
          checkedChildren="Active"
          unCheckedChildren="Active"
          defaultChecked
        />
      ),
    },
    {
      title: "",
      dataIndex: "Action",
      key: "action",
      align: "center",
      width: "150px",
      render: () => (
        <>
          <TopicModal showIcon={true} />
          <button className="btn btn-icon delete">
            <DeleteOutlined />
          </button>
        </>
      ),
    },
  ];

  const expandedRowRender = () => {
    return <QuestionList />;
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <ExpandTable
            dataSource={dataSource}
            columns={columns}
            TitlePage="Topic List"
            Extra={<TopicModal showBtn={true} />}
            expandable={{ expandedRowRender }}
          />
        </div>
      </div>
    </>
  );
};

export default TopicList;

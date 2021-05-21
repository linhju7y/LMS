import React from "react";
import { Button, Collapse, Divider, Tag } from "antd";
import PowerTable from "~/components/PowerTable";
import { dataService } from "../../../../lib/customer/dataCustomer";
import ExpandTable from "~/components/ExpandTable";
import { Info } from "react-feather";
const expandedRowRender = () => {
  return (
    <>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic magni,
      obcaecati optio, autem sapiente itaque eligendi deleniti dolor cumque
      suscipit iste incidunt quasi eveniet a laborum! Amet exercitationem nisi
      aspernatur.
    </>
  );
};
const InfoCourseCard = () => {
  const { Panel } = Collapse;
  const columns = [
    { title: "Ngày", dataIndex: "testDate" },
    { title: "Môn học", dataIndex: "pfSubject" },
    {
      title: "Học lực",
      dataIndex: "pfRank",
      render: (pfRank) => {
        let color = pfRank == "Giỏi" ? "#06d6a0" : "#e63946";
        if (pfRank == "Khá") {
          color = "#ffba08";
        }
        return (
          <Tag color={color} key={pfRank}>
            <b> {pfRank.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Giáo viên", dataIndex: "nameStudent" },
    {
      title: "Điểm danh",
      dataIndex: "pfRollCall",
      render: (pfRollCall) => {
        let color = pfRollCall == "Có" ? "cyan" : "volcano";

        return (
          <Tag color={color} key={pfRollCall}>
            <b> {pfRollCall.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Ghi chú" },
    { title: "Cảnh báo" },
  ];
  const columns2 = [
    { title: "Nhóm bài", dataIndex: "pfSubject" },
    { title: "Ngày tạo", dataIndex: "testDate" },
    {
      title: "Trạng thái",
      dataIndex: "pfRollCall",
      render: (pfRollCall) => {
        let color = pfRollCall == "Có" ? "cyan" : "volcano";

        return (
          <Tag color={color} key={pfRollCall}>
            <b> {pfRollCall.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "Điểm",
      dataIndex: "listening",

      render: (listening) => {
        return (
          <Tag color={"default"} key={listening}>
            <b> {listening}</b>
          </Tag>
        );
      },
    },
    {
      dataIndex: "",
      render: () => (
        <>
          <Button type="link" icon={<Info />} />
        </>
      ),
    },
  ];
  const columns3 = [
    {
      title: "Exam",
      dataIndex: "pkgName",
    },

    {
      title: "Listening",
      dataIndex: "listening",
      render: (listening) => {
        return (
          <Tag color={"cyan"} key={listening}>
            <b> {listening}</b>
          </Tag>
        );
      },
    },
    {
      title: "Reading",
      dataIndex: "reading",
      render: (reading) => {
        return (
          <Tag color={"cyan"} key={reading}>
            <b> {reading}</b>
          </Tag>
        );
      },
    },
    {
      title: "Writing",
      dataIndex: "writing",
      render: (writing) => {
        return (
          <Tag color={"cyan"} key={writing}>
            <b> {writing}</b>
          </Tag>
        );
      },
    },
    {
      title: "Speaking",
      dataIndex: "speaking",
      render: (speaking) => {
        return (
          <Tag color={"cyan"} key={speaking}>
            <b> {speaking}</b>
          </Tag>
        );
      },
    },
    {
      title: "Ghi chú",
    },
  ];

  return (
    <>
      <Collapse accordion>
        <Panel
          header="[ZIM - 20L5 Thái Hà] - A-IELTS Foundation, 01/12, 18:30-20:30"
          key="1"
        >
          <PowerTable
            dataSource={dataService}
            columns={columns}
            TitleCard="Điểm danh"
          />
          <Divider />

          <ExpandTable
            TitleCard="Bài tập"
            expandable={{ expandedRowRender }}
            dataSource={dataService}
            columns={columns2}
          />

          <Divider />

          <PowerTable
            dataSource={dataService}
            columns={columns3}
            TitleCard="Điểm thi"
          />
        </Panel>
      </Collapse>
    </>
  );
};
export default InfoCourseCard;

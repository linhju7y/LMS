import TitlePage from "~/components/Elements/TitlePage";
import { Card, Tag, Space, Table } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import SortBox from "~/components/Elements/SortBox";
import { table } from "console";
import { useRouter } from "next/router";
import Link from "next/link";

const columns = [
  {
    title: "Ngày học",
    dataIndex: "startday",
    key: "startday",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giáo viên",
    dataIndex: "teacher",
    key: "teacher",
  },
  {
    title: "Trung tâm",
    dataIndex: "center",
    key: "center",
  },
  {
    title: "Ca",
    key: "studytime",
    dataIndex: "studytime",
  },
  {
    title: "Phòng học",
    key: "room",
    dataIndex: "room",
  },
];

const data = [
  {
    key: "1",
    center: "ZIM - 35 Võ Oanh",
    studytime: "Tự học sáng",
    startday: "12/05/2021",
    room: "1B",
    teacher: "Mr.An",
  },
  {
    key: "2",
    center: "ZIM - 35 Võ Oanh",
    studytime: "Tự học sáng",
    startday: "12/05/2021",
    room: "1B",
    teacher: "Mr.An",
  },
  {
    key: "3",
    center: "ZIM - 35 Võ Oanh",
    studytime: "Tự học sáng",
    startday: "12/05/2021",
    room: "1B",
    teacher: "Mr.An",
  },
  {
    key: "4",
    center: "ZIM - 35 Võ Oanh",
    studytime: "Tự học sáng",
    startday: "12/05/2021",
    room: "1B",
    teacher: "Mr.An",
  },
  {
    key: "5",
    center: "ZIM - 35 Võ Oanh",
    studytime: "Tự học sáng",
    startday: "12/05/2021",
    room: "1B",
    teacher: "Mr.An",
  },

  {
    key: "6",
    center: "ZIM - 35 Võ Oanh",
    studytime: "Tự học sáng",
    startday: "12/05/2021",
    room: "1B",
    teacher: "Mr.An",
  },
];

const CourseListSelfDetail = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 course-list-self-detail">
          <TitlePage title="Danh sách khóa tự học" />
          <div className="wrap-table">
            <Card
              title={
                <p className="detail-title">
                  PHÒNG TỰ HỌC (30/9 - 5/10) - CA SÁNG
                </p>
              }
            >
              <Table columns={columns} dataSource={data} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseListSelfDetail;

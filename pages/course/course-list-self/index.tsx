import TitlePage from "~/components/Elements/TitlePage";
import { Card, Tag, Space, Table } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import SortBox from "~/components/SortBox";
import { table } from "console";
import { useRouter } from "next/router";
import Link from "next/link";

const columns = [
  {
    title: "Trung tâm",
    dataIndex: "center",
    key: "trungtam",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Khóa",
    dataIndex: "course",
    key: "khoa",
  },
  {
    title: "Ngày mở",
    dataIndex: "startday",
    key: "ngaymo",
  },
  {
    title: "Phòng",
    key: "phong",
    dataIndex: "room",
  },
  {
    title: "Ngày tạo",
    key: "ngaytao",
    dataIndex: "createday",
  },
  {
    title: "",
    key: "action",
    dataIndex: "action",
    render: (text) => (
      <Link
        href={{
          pathname: "/course/course-list-self/detail/[slug]",
          query: { slug: 2 },
        }}
      >
        <a className="btn btn-primary">View</a>
      </Link>
    ),
  },
];

const data = [
  {
    key: "1",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "2",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "3",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "4",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "5",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "6",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "7",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "8",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
  {
    key: "9",
    center: "ZIM - 35 Võ Oanh",
    course: "Phòng tự học (30/9 - 5/10) - Ca chiều",
    startday: "12/05/2021",
    room: "1B",
    createday: "30/05/2021",
    action: ["view"],
  },
];

const CourseListSelf = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách khóa tự học" />
          <div className="wrap-table">
            <Card
              extra={
                <div className="list-action-table">
                  <SortBox /> <SearchBox />
                </div>
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

export default CourseListSelf;

import { Table, Tag, Space, Card, Button, Select, Input } from "antd";
import TitlePage from "~/components/TitlePage";
import PowerTable from "~/components/PowerTable";

const Dashboard = () => {
  // Search //

  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  // Table //
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-12">
          <TitlePage title={"Trang chủ"} />
          <div className="wrap-table">
            <Card
              className="cardRadius"
              title={<Button type="primary">Thêm item</Button>}
              extra={
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  style={{ width: 250 }}
                  className="btn-search"
                  size="large"
                />
              }
            >
              <PowerTable columns={columns} dataSource={data} />
            </Card>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </>
  );
};
export default Dashboard;

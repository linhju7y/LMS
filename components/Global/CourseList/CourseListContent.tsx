import { List, Avatar, Tag, Divider } from "antd";
import ModalUpdate from "./ModalUpdate";

const CourseListContent = () => {
  const data = [
    {
      title:
        "[ZIM - 1A - 1B Dân Chủ] - AS - Pronunciation, 03/04, 18:30-20:30,",
      leader: "Mr.Andy",
      teacher: "MS.Mai",
      price: "20.000.000 VNĐ",
      offline: "12 days",
      opening: "10/05/2021",
      end: "22/08/2021",
      student: "4",
    },
    {
      title:
        "[ZIM - 1A - 1B Dân Chủ] - AS - Pronunciation, 03/04, 18:30-20:30,",
      leader: "Mr.Andy",
      teacher: "MS.Mai",
      price: "20.000.000 VNĐ",
      offline: "12 days",
      opening: "10/05/2021",
      end: "22/08/2021",
      student: "4",
    },
    {
      title:
        "[ZIM - 1A - 1B Dân Chủ] - AS - Pronunciation, 03/04, 18:30-20:30,",
      leader: "Mr.Andy",
      teacher: "MS.Mai",
      price: "20.000.000 VNĐ",
      offline: "12 days",
      opening: "10/05/2021",
      end: "22/08/2021",
      student: "4",
    },
    {
      title:
        "[ZIM - 1A - 1B Dân Chủ] - AS - Pronunciation, 03/04, 18:30-20:30,",
      leader: "Mr.Andy",
      teacher: "MS.Mai",
      price: "20.000.000 VNĐ",
      offline: "12 days",
      opening: "10/05/2021",
      end: "22/08/2021",
      student: "4",
    },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item extra={<ModalUpdate />}>
          <List.Item.Meta
            avatar={<Tag color="gold">IS COMING</Tag>}
            title={<a href="https://ant.design">{item.title}</a>}
            description={
              <div className="content-body">
                <ul className="list-ver">
                  <li>
                    <span>Leader: </span> <span>{item.leader}</span>
                  </li>
                  <li>
                    <span>Teachers: </span> <span>{item.teacher}</span>
                  </li>
                  <li>
                    <span>Price: </span> <span>{item.price}</span>
                  </li>
                </ul>
                <ul className="list-hor">
                  <li>
                    Offday: <span>{item.offline}</span>
                  </li>
                  <li>
                    Opening: <span>{item.opening}</span>
                  </li>
                  <li>
                    End: <span>{item.end}</span>
                  </li>
                  <li>
                    Student: <span>{item.student}</span>
                  </li>
                </ul>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default CourseListContent;

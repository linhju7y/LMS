import TitlePage from "~/components/TitlePage";
import { Card, Form, Select, Input, Table, Button } from "antd";
import TinyBox from "~/components/TinyMCE";
import { Comment, Tooltip, Avatar, Rate, Tag } from "antd";
import { dataService } from "../../../../lib/customer/dataCustomer";
import { Upload, Save } from "react-feather";
import PowerTable from "~/components/PowerTable";

const InfoTestResultCard = () => {
  const columns = [
    {
      title: "Listening",
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
      title: "Reading",
      dataIndex: "reading",
      render: (reading) => {
        return (
          <Tag color={"default"} key={reading}>
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
          <Tag color={"default"} key={writing}>
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
          <Tag color={"default"} key={speaking}>
            <b> {speaking}</b>
          </Tag>
        );
      },
    },
    {
      title: "Overall",
      dataIndex: "overall",
      render: (overall) => {
        return (
          <Tag color={"cyan"} key={overall}>
            <b> {overall}</b>
          </Tag>
        );
      },
    },
    { title: "Noted", dataIndex: "service" },
    {
      render: () => (
        <>
          <Button type="link" icon={<Upload />} />
          <Button type="link" icon={<Save />} />
        </>
      ),
    },
  ];
  const { Option } = Select;

  return (
    <>
      <div className="container-fluid row">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Card title="Kết quả bài thi">
                <div className="row">
                  <Form layout="vertical">
                    <div className="row">
                      <div className="col-6">
                        <Form.Item label="Ngày thi">
                          <Input className="style-input" type="date" />
                        </Form.Item>
                      </div>
                      <div className="col-6">
                        <Form.Item label="Tư vấn viên">
                          <Select
                            className="w-100 style-input"
                            defaultValue="1"
                          >
                            <Option value="1">
                              [ZIM - 20L5 Thái Hà] - A-IELTS Solo 3 levels,
                              19/10, 18:30-20:30
                            </Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      <PowerTable
                        scroll={{ x: 300 }}
                        pagination={false}
                        columns={columns}
                        dataSource={dataService}
                      />
                    </div>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <Card title="Nhận xét giáo viên">
                <TinyBox />
              </Card>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Card className="box-comment" title="Nhận xét">
            <Comment
              author={<a>Kim Jisoo</a>}
              avatar={<Avatar src="/images/user2.jpg" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
            <Comment
              author={<a>Kim Jennie</a>}
              avatar={<Avatar src="/images/user.jpg" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />{" "}
            <Comment
              author={<a>Rosé Park</a>}
              avatar={<Avatar src="/images/user2.jpg" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
            <Comment
              author={<a>Lalisa</a>}
              avatar={<Avatar src="/images/user.jpg" alt="Lalisa" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default InfoTestResultCard;

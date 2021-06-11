import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Row,
  Col,
  Form,
  Card,
  Divider,
  Input,
  Select,
  DatePicker,
  Button,
  Avatar,
  Upload,
  Rate,
  Table,
  Checkbox,
} from "antd";
import ImgCrop from "antd-img-crop";
import {
  UserOutlined,
  DeploymentUnitOutlined,
  WhatsAppOutlined,
  MailOutlined,
  AimOutlined,
} from "@ant-design/icons";

// interface info {
//   key: string,
//     ClassName: string,
//     Check: string,
//     Listening: string,
//     Wrting:string,
//     Speaking:string,
//     Reading:string,
//     SpeakingWorkstring,
//     ReadingWork:string,
//     width:number,
//     fixed:string,
// }

const dataSource = [
  {
    key: "1",
    ClassName: "AS - IELTS Intermediate",
    Check: "",
    Listening: "",
    Wrting: "",
    Speaking: "",
    Reading: "",
    SpeakingWork: "",
    ReadingWork: "",
    width: "",
    fixed: "",
  },
];

const columns = [
  {
    title: "Tên lớp học",
    width: 200,
    dataIndex: "ClassName",
    key: "classname",

    render: (text) => <p className="color-primary">{text}</p>,
  },
  {
    title: "Dạy",
    dataIndex: "Check",
    key: "check",
    render: () => <Checkbox />,
  },
  {
    title: "Listening",
    dataIndex: "Listening",
    key: "listening",
    render: () => <SelectRemark />,
  },
  {
    title: "Wrting",
    dataIndex: "Wrting",
    key: "wrting",
    render: () => <SelectRemark />,
  },
  {
    title: "Reading",
    dataIndex: "Reading",
    key: "reading",
    render: () => <SelectRemark />,
  },

  {
    title: "BT Listening",
    dataIndex: "ListeningWork",
    key: "listeningwork",
    render: () => <SelectRemark />,
  },
  {
    title: "BT Reading",
    dataIndex: "ReadingWork",
    key: "readingwork",
    render: () => <SelectRemark />,
  },
];

const SelectRemark = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Select defaultValue="trungbinh" onChange={handleChange}>
      <Option value="gioi">Giỏi</Option>
      <Option value="kha">Khá</Option>
      <Option value="trungbinh">Trung bình</Option>
    </Select>
  );
};

const ProfileBase = (props) => {
  // Get path and slug
  const router = useRouter();
  const slug = router.query.slug;
  let path: string = router.pathname;
  let pathString: string[] = path.split("/");
  path = pathString[pathString.length - 2];
  // --------------- //

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="row">
        <div className="col-md-3 col-12">
          <Card className="info-profile-left">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-center flex-wrap">
                <Avatar size={64} src={<img src="/images/user.png" />} />
                {path === "teacher-detail" && (
                  <Rate
                    disabled
                    value={4}
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                )}
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-2">
                <UserOutlined />
              </div>
              <div className="col-10  d-flex ">Nguyễn An</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <DeploymentUnitOutlined />
              </div>
              <div className="col-10  d-flex ">Teacher</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <WhatsAppOutlined />
              </div>
              <div className="col-10  d-flex ">0978111222</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <MailOutlined />
              </div>
              <div className="col-10  d-flex ">anhandsome@gmail.com</div>
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <AimOutlined />
              </div>
              <div className="col-10  d-flex ">London, England</div>
            </div>
          </Card>
          {/* {
            path === "teacher-detail"  &&
            <Card title="Ratings" className="mt-2">
                hello
            </Card>
          } */}
        </div>
        <div className="col-md-9 col-12">
          <Card className="space-top-card">
            <Form layout="vertical">
              <div className="row d-flex justify-content-center align-items-center">
                <h5>Tài khoản nhân viên</h5>

                <Divider></Divider>
              </div>
              <div className="row">
                <div className="col-md-4 col-12">
                  <Form.Item label="Họ và tên">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
                <div className="col-md-4 col-12">
                  <Form.Item label="Giới tính">
                    <Select
                      className="style-input"
                      size="large"
                      defaultValue="Không xác định"
                    >
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Không xác định">Không xác định</option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-md-4 col-12">
                  <Form.Item label="Ngày sinh">
                    <DatePicker size="large" className="w-100 style-input" />
                  </Form.Item>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <Form.Item label="Địa chỉ email">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-12">
                  <Form.Item label="Số điện thoại">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Item label="Địa chỉ">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <Form.Item label="Tên tài khoản">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-12">
                  <Form.Item label="Mật khẩu mới">
                    <Input
                      className="style-input"
                      size="large"
                      type="password"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Item label="Hình đại diện">
                    <ImgCrop grid>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                      >
                        {fileList.length < 1 && "+ Upload"}
                      </Upload>
                    </ImgCrop>
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-primary">
                    Cập nhật thông tin
                  </button>
                </div>
              </div>
            </Form>
          </Card>

          {path === "teacher-detail" && (
            <>
              <div className="wrap-table table-overflow-x mt-2">
                <Card title="Thông tin các lớp học">
                  <Table
                    pagination={false}
                    className="mt-4"
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1500 }}
                  />
                  <Table
                    pagination={false}
                    className="mt-4"
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1500 }}
                  />
                  <Table
                    pagination={false}
                    className="mt-4"
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1500 }}
                  />
                  <Table
                    pagination={false}
                    className="mt-4"
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1500 }}
                  />
                  <Table
                    pagination={false}
                    className="mt-4"
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1500 }}
                  />
                </Card>
              </div>
            </>
          )}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default ProfileBase;

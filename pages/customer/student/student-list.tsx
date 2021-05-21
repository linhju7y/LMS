import React from "react";
import ExpandTable from "~/components/ExpandTable";
import { Eye, Filter } from "react-feather";
import { Button, Card, Tag, Form, Input, Select, Tooltip } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import FilterTable from "~/components/Global/FeedbackList/FitlerTable";
import Link from "next/link";

import { data } from "../../../lib/customer-student/data";
import TitlePage from "~/components/Elements/TitlePage";
const { Option } = Select;
const expandedRowRender = () => {
  return (
    <>
      <Card title="Thông tin cá nhân">
        <Form layout="vertical">
          <div className="row">
            <div className="col-3">
              <Form.Item label="Nguồn khách">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Tư vấn viên</Option>
                  <Option value="2">Hotline</Option>
                  <Option value="3">Facebook</Option>
                  <Option value="4">Dataweb</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Hỗ trợ">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Hồng Anh</Option>
                  <Option value="2">Hồng Thảo</Option>
                  <Option value="3">Kim Ngân</Option>
                  <Option value="4">Phi Vân</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Địa chỉ">
                <Input className="style-input" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Tỉnh/TP">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">TP.HCM</Option>
                  <Option value="2">Đà Nẵng</Option>
                  <Option value="3">Hà Nội</Option>
                  <Option value="4">Vũng Tàu</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Form.Item label="Quận Huyện">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Thủ Đức</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Phường Xã">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Linh Trung</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Đường">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Hoàng Diệu</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Số nhà">
                <Input className="style-input" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Form.Item label="Họ và tên">
                <Input className="style-input" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Số điện thoại">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Hoàng Diệu</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Email">
                <Input className="style-input" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Ngày sinh">
                <Input className="style-input" type="date" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Form.Item label="Số CMND">
                <Input className="style-input" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Nơi cấp">
                <Input className="style-input" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Ngày cấp">
                <Input className="style-input" type="date" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Công việc">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Học sinh</Option>
                  <Option value="1">Sinh viên</Option>
                  <Option value="1">Khác</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Form.Item label="Đơn vị công tác/Học tập">
                <Input className="style-input" />
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Mục đích học tập">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Học tập</Option>
                  <Option value="1">Định cư</Option>
                  <Option value="1">Du học</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Loại đào tạo">
                <Select
                  className="style-input w-100"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Academic</Option>
                  <Option value="1">General</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Người nhà">
                <Input className="style-input" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Form.Item label="Đầu vào">
                <Input className="style-input"></Input>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Đầu ra">
                <Input className="style-input"></Input>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Ngày thi">
                <Input className="style-input" type="date"></Input>
              </Form.Item>
            </div>
            <div className="col-3">
              <Form.Item label="Trạng thái">
                <Select defaultValue="lucy" className="style-input">
                  <Option value="1">Jack</Option>
                  <Option value="2">Lucy</Option>
                  <Option value="3">yiminghe</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Mật khẩu mới">
                <Input className="style-input" type="password"></Input>
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Tài khoản">
                <Input className="style-input"></Input>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex  justify-content-center">
              <Button type="primary" size="large">
                Cập nhật
              </Button>
            </div>
          </div>
        </Form>
      </Card>
    </>
  );
};

const StudentData = () => {
  const columns = [
    { title: "Tỉnh/TP", dataIndex: "city" },
    { title: "Họ và tên", dataIndex: "nameStudent" },
    { title: "SĐT", dataIndex: "tel" },
    { title: "Email", dataIndex: "email" },
    { title: "Nguồn", dataIndex: "introducer" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status) => {
        let color = status == "Active" ? "blue" : "volcano";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Tư vấn viên", dataIndex: "consultant" },
    {
      title: "Đã đăng kí",
      dataIndex: "signUp",
      render: (status) => {
        let color = status == "Đã xong" ? "green" : "volcano";
        return (
          <Tag color={color} key={status}>
            <b> {status.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    {
      title: "",
      render: () => (
        <Link
          href={{
            pathname: "/customer/student/detail/[slug]",
            query: { slug: 2 },
          }}
        >
          <Tooltip title="Xem chi tiết">
            <Button type="link" icon={<Eye />} />
          </Tooltip>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <TitlePage title="Danh sách học viên" />
        </div>
        <div className="col-12">
          <ExpandTable
            expandable={{ expandedRowRender }}
            dataSource={data}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SearchBox />
                <button className="btn btn-secondary light btn-filter">
                  <Filter />
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StudentData;

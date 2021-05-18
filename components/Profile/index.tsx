import React, { useState } from "react";
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
} from "antd";
import ImgCrop from "antd-img-crop";
import {
  UserOutlined,
  DeploymentUnitOutlined,
  WhatsAppOutlined,
  MailOutlined,
  AimOutlined,
} from "@ant-design/icons";

const ProfileBase = () => {
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
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Card className="info-profile-left">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <Avatar size={64} src={<img src="/images/user.png" />} />
              </div>
            </div>
            <div className="row pt-5">
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
        </div>
        <div className="col-9">
          <Card>
            <Form layout="vertical">
              <div className="row d-flex justify-content-center align-items-center">
                <h5>Tài khoản nhân viên</h5>

                <Divider></Divider>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Item label="Họ và tên">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
                <div className="col-4">
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
                <div className="col-4">
                  <Form.Item label="Ngày sinh">
                    <DatePicker size="large" className="w-100 style-input" />
                  </Form.Item>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <Form.Item label="Địa chỉ email">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
                <div className="col-6">
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
                <div className="col-6">
                  <Form.Item label="Tên tài khoản">
                    <Input className="style-input" size="large" />
                  </Form.Item>
                </div>
                <div className="col-6">
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
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ProfileBase;

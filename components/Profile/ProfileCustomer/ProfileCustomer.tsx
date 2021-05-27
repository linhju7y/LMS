import React, { useState } from "react";
import { Card, Select, Avatar, Tabs, Affix } from "antd";
import {
  UserOutlined,
  DeploymentUnitOutlined,
  WhatsAppOutlined,
  MailOutlined,
  AimOutlined,
} from "@ant-design/icons";
import InfoCusCard from "./component/InfoCusCard";
import InfoTestCard from "./component/InfoTestCard";
import InfoCourseCard from "./component/InfoCourseCard";
import InfoPaymentCard from "./component/InfoPaymentCard";
import InfoChangeCard from "./component/InfoChangeCard";
import InfoOtherCard from "./component/InfoOtherCard";
import InfoTestResultCard from "./component/InfoTestResultCard";

const ProfileCustomer = () => {
  const { TabPane } = Tabs;
  const { Option } = Select;

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
          <Affix offsetTop={85}>
            <Card className="info-profile-left">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <Avatar size={120} src={<img src="/images/user2.jpg" />} />
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-2">
                  <UserOutlined />
                </div>
                <div className="col-10  d-flex ">Nguyễn Lâm Thảo Tâm</div>
              </div>
              <div className="row pt-4">
                <div className="col-2">
                  <DeploymentUnitOutlined />
                </div>
                <div className="col-10  d-flex ">Học viên</div>
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
                <div className="col-10  d-flex ">kimjisoo@gmail.com</div>
              </div>
              <div className="row pt-4">
                <div className="col-2">
                  <AimOutlined />
                </div>
                <div className="col-10  d-flex ">Seoul, Korea</div>
              </div>
            </Card>
          </Affix>
        </div>
        <div className="col-9">
          <Card>
            <Tabs type="card">
              <TabPane tab="Thông tin cá nhân" key="1">
                <InfoCusCard />
              </TabPane>
              <TabPane tab="Test Info" key="2">
                <InfoTestCard />
              </TabPane>
              <TabPane tab="Course Joined" key="3">
                <InfoCourseCard />
              </TabPane>
              <TabPane tab="Payment History" key="4">
                <InfoPaymentCard />
              </TabPane>
              <TabPane tab="Change History" key="5">
                <InfoChangeCard />
              </TabPane>
              <TabPane tab="Test result" key="6">
                <InfoTestResultCard />
              </TabPane>
              <TabPane tab="Other" key="7">
                <InfoOtherCard />
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProfileCustomer;

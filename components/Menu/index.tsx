import { Menu, Button } from "antd";
import React, { useEffect, useState, useReducer, PureComponent } from "react";

import { BarChart, Bar, LineChart, Line } from "recharts";

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { type } from "os";

import {
  Bookmark,
  Server,
  Home,
  Activity,
  Airplay,
  Box,
  Layers,
  Settings,
  Users,
  User,
  BarChart2,
  Package,
  Calendar,
  BookOpen,
  Award,
  List,
  Cast,
  Book,
  Archive,
  MapPin,
  UserCheck,
} from "react-feather";
import Link from "next/link";

const { SubMenu } = Menu;

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 2800,
    pv: 2800,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 1900,
  },
  {
    name: "Page G",
    uv: 3800,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 2200,
    pv: 2200,
    amt: 1650,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 3780,
    amt: 1780,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 3400,
    amt: 1500,
  },
];

const MenuDefault = ({
  toggle,
  toggleMenu,
}: {
  toggle: boolean;
  toggleMenu: Function;
}) => {
  const [state, setState] = useState({
    collapsed: toggle,
  });

  const [tab, tabSet] = useState<String>("tab-home");

  useEffect(() => {
    if (toggle) {
      setState({ collapsed: false });
    } else {
      setState({ collapsed: true });
    }
  }, [toggle]);

  const changeTabs = (e) => {
    e.preventDefault();
    if (!toggle) {
      toggleMenu();
    }
    let dataTab = e.target.getAttribute("data-tabs");
    tabSet(dataTab);
  };

  // useEffect(() => {
  //   let itemLink = document.querySelectorAll(".ant-menu-item");
  //   console.log(itemLink);
  //   for (let i = 0; i < itemLink.length; i++) {
  //     itemLink[i].addEventListener("click", function () {
  //       alert("hi");
  //     });
  //   }
  // }, [tab]);

  return (
    <aside className={`navbar-right `}>
      <div className="menu-parent">
        <div className="menu-parent-logo">
          <img className="logo-img" src="/images/logo.png"></img>
        </div>
        <div className="menu-parent-body">
          <ul className="list-menu">
            <li className={tab === "tab-home" ? "active" : ""}>
              <a href="#" onClick={changeTabs} data-tabs="tab-home">
                <Home />
              </a>
            </li>
            <li className={tab === "tab-course" ? "active" : ""}>
              <a href="#" onClick={changeTabs} data-tabs="tab-course">
                <Airplay />
              </a>
            </li>
            <li className={tab === "tab-student" ? "active" : ""}>
              <a href="#" onClick={changeTabs} data-tabs="tab-student">
                <User />
              </a>
            </li>
            <li className={tab === "tab-teacher" ? "active" : ""}>
              <a href="#" onClick={changeTabs} data-tabs="tab-teacher">
                <UserCheck />
              </a>
            </li>
            <li className={tab === "tab-layout" ? "active" : ""}>
              <a href="#" onClick={changeTabs} data-tabs="tab-layout">
                <Layers />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`menu-child ${!toggle ? "close" : ""}`}>
        <div className="app-header-logo">
          <p style={{ display: toggle ? "block" : "none" }}>Mona Media</p>
          <p style={{ display: !toggle ? "block" : "none" }}>M</p>
        </div>
        <div className="menu-child-body">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={state.collapsed}
            style={{ display: tab === "tab-home" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="all" title="Dashboad">
              <Menu.Item
                key="1"
                icon={
                  <span className="anticon">
                    <Home />
                  </span>
                }
              >
                <Link href="/dashboard">Trang chủ</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={state.collapsed}
            style={{ display: tab === "tab-course" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="course" title="Admin">
              <SubMenu
                key="sub1"
                icon={
                  <span className="anticon">
                    <BookOpen />
                  </span>
                }
                title="Quản lí khóa học"
              >
                <Menu.Item key="5">Tạo khóa học</Menu.Item>
                <Menu.Item key="6">Danh sách khóa học</Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                icon={
                  <span className="anticon">
                    <Calendar />
                  </span>
                }
                title="Quản lí ca học"
              >
                <Menu.Item key="7">Kiểm tra một ca học</Menu.Item>
                <Menu.Item key="8">Kiểm tra nhiều ca</Menu.Item>
              </SubMenu>

              <Menu.Item
                key="setting"
                icon={
                  <span className="anticon">
                    <Settings />
                  </span>
                }
              >
                <Link href="/">Cấu hình</Link>
              </Menu.Item>
              <Menu.Item
                key="customer"
                icon={
                  <span className="anticon">
                    <Users />
                  </span>
                }
              >
                <Link href="/">Khách hàng</Link>
              </Menu.Item>
              <Menu.Item
                key="staff"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
              >
                <Link href="/">Nhân viên</Link>
              </Menu.Item>
              <Menu.Item
                key="thongke"
                icon={
                  <span className="anticon">
                    <BarChart2 />
                  </span>
                }
              >
                <Link href="/">Thống kê</Link>
              </Menu.Item>
              <Menu.Item
                key="manage"
                icon={
                  <span className="anticon">
                    <Package />
                  </span>
                }
              >
                <Link href="/">Quản lý</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>

          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={state.collapsed}
            style={{ display: tab === "tab-layout" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="course" title="Component Layout">
              <SubMenu
                key="sub1"
                icon={
                  <span className="anticon">
                    <Layers />
                  </span>
                }
                title="Layout"
              >
                <Menu.Item key="9">
                  <Link href="/layoutTables">Tables</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link href="/layoutButton">Button</Link>
                </Menu.Item>
                <Menu.Item key="11">
                  <Link href="/layoutForms">Form</Link>
                </Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </Menu>

          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={state.collapsed}
            style={{ display: tab === "tab-student" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="course" title="Học viên">
              <SubMenu
                key="sub-list-course"
                icon={
                  <span className="anticon">
                    <List />
                  </span>
                }
                title="Danh sách khóa học"
              >
                <SubMenu
                  key="sub-list-course-child"
                  icon={
                    <span className="anticon">
                      <Award />
                    </span>
                  }
                  title="Khóa học"
                >
                  <Menu.Item key="info-course">
                    <Link href="/">Thông tin khóa học</Link>
                  </Menu.Item>

                  <Menu.Item key="calendar-course">
                    <Link href="/">Lịch học của khóa</Link>
                  </Menu.Item>

                  <Menu.Item key="document-course">
                    <Link href="/">Tài liệu</Link>
                  </Menu.Item>

                  <Menu.Item key="homework-course">
                    <Link href="/">Bài tập</Link>
                  </Menu.Item>

                  <Menu.Item key="notification-course">
                    <Link href="/">Thông báo</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub-list-course-child-2"
                  icon={
                    <span className="anticon">
                      <Cast />
                    </span>
                  }
                  title="Khóa học online"
                >
                  <Menu.Item key="info-course-2">
                    <Link href="/">Thông tin khóa học</Link>
                  </Menu.Item>

                  <Menu.Item key="calendar-course-2">
                    <Link href="/">Lịch học của khóa</Link>
                  </Menu.Item>

                  <Menu.Item key="document-course-2">
                    <Link href="/">Tài liệu</Link>
                  </Menu.Item>

                  <Menu.Item key="homework-course-2">
                    <Link href="/">Bài tập</Link>
                  </Menu.Item>

                  <Menu.Item key="notification-course-2">
                    <Link href="/">Thông báo</Link>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>

              <Menu.Item
                key="hv-calendar"
                icon={
                  <span className="anticon">
                    <Calendar />
                  </span>
                }
              >
                <Link href="/">Lịch học</Link>
              </Menu.Item>

              <Menu.Item
                key="hv-homework"
                icon={
                  <span className="anticon">
                    <Book />
                  </span>
                }
              >
                <Link href="/">Bài tập</Link>
              </Menu.Item>

              <Menu.Item
                key="hv-homework-package"
                icon={
                  <span className="anticon">
                    <Archive />
                  </span>
                }
              >
                <Link href="/">Gói bài tập</Link>
              </Menu.Item>

              <Menu.Item
                key="hv-store"
                icon={
                  <span className="anticon">
                    <MapPin />
                  </span>
                }
              >
                <Link href="/">Cửa hàng</Link>
              </Menu.Item>

              <Menu.Item
                key="hv-thongke"
                icon={
                  <span className="anticon">
                    <BarChart2 />
                  </span>
                }
              >
                <Link href="/">Thống kê</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>

          <Menu
            defaultSelectedKeys={["5"]}
            defaultOpenKeys={["sub-teacher"]}
            mode="inline"
            theme="light"
            inlineCollapsed={state.collapsed}
            style={{ display: tab === "tab-teacher" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="course" title="Giáo viên">
              <SubMenu
                key="teacher-calendar"
                icon={
                  <span className="anticon">
                    <Calendar />
                  </span>
                }
                title="Lịch dạy"
              >
                <Menu.Item key="teacher-calendar-1">
                  <Link href="/">Lịch dạy theo tuần</Link>
                </Menu.Item>
                <Menu.Item key="teacher-calendar-2">
                  <Link href="/">Lịch dạy theo khóa</Link>
                </Menu.Item>
                <Menu.Item key="teacher-calendar-3">
                  <Link href="/">Lịch nghỉ</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="teacher-course"
                icon={
                  <span className="anticon">
                    <Award />
                  </span>
                }
                title="Khóa học"
              >
                <Menu.Item key="teacher-course-1">
                  <Link href="/">Thông tin khóa học</Link>
                </Menu.Item>
                <Menu.Item key="teacher-course-2">
                  <Link href="/">Lịch học của khóa</Link>
                </Menu.Item>
                <Menu.Item key="teacher-course-3">
                  <Link href="/">Tài liệu</Link>
                </Menu.Item>
                <Menu.Item key="teacher-course-4">
                  <Link href="/">Thông báo</Link>
                </Menu.Item>
                <Menu.Item key="teacher-course-5">
                  <Link href="/">Điểm danh</Link>
                </Menu.Item>
                <Menu.Item key="teacher-course-6">
                  <Link href="/">Timeline</Link>
                </Menu.Item>
                <Menu.Item key="teacher-course-7">
                  <Link href="/">Học viên</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="teacher-homework"
                icon={
                  <span className="anticon">
                    <Book />
                  </span>
                }
                title="Bài tập"
              >
                <Menu.Item key="teacher-homework-1">
                  <Link href="/">Danh sách bài mới nộp</Link>
                </Menu.Item>
                <Menu.Item key="teacher-homework-2">
                  <Link href="/">Danh sách bài chưa chấm</Link>
                </Menu.Item>
                <Menu.Item key="teacher-homework-3">
                  <Link href="/">Danh sách bài chấm lại</Link>
                </Menu.Item>
                <Menu.Item key="teacher-homework-4">
                  <Link href="/">Danh sách bài đã chấm</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="teacher-student"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Học viên"
              >
                <Menu.Item key="teacher-student-1">
                  <Link href="/">Thêm học viên</Link>
                </Menu.Item>
                <Menu.Item key="teacher-student-2">
                  <Link href="/">Học viên bị cảnh báo</Link>
                </Menu.Item>
                <Menu.Item key="teacher-student-3">
                  <Link href="/">Học viên sắp thi</Link>
                </Menu.Item>
                <Menu.Item key="teacher-student-4">
                  <Link href="/">Kết quả thi thực tế</Link>
                </Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </Menu>
          <div className="menu-child-info white">
            <div className="box-title">
              <h6 className="title">Học viên mới</h6>
              <p className="des">Thống kê số học viên mới trong tháng</p>
              <span className="icon">
                <BarChart2 />
              </span>
            </div>
            <div className="wrap-chart">
              <BarChart width={200} height={80} data={data}>
                <Bar dataKey="uv" fill="#08c" barSize={6} background={true} />
              </BarChart>
            </div>
          </div>
          <div className="menu-child-info yellow">
            <div className="box-title">
              <h6 className="title">Khóa mới</h6>
              <p className="des">Thống kê tất cả các khóa mới trong tháng</p>
              <span className="icon">
                <Activity />
              </span>
            </div>
            <div className="wrap-chart">
              <LineChart width={200} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#08c"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MenuDefault;

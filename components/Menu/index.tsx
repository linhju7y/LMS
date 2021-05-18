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
  CheckSquare,
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
                <Link href="/admin/dashboard">Trang chủ</Link>
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
            <Menu.ItemGroup key="course" title="Khóa học">
              <SubMenu
                key="sub1"
                icon={
                  <span className="anticon">
                    <BookOpen />
                  </span>
                }
                title="Quản lí khóa học"
              >
                <Menu.Item key="taokhoahoc">
                  <Link href="/course/create-course">
                    <a>Tạo khóa học</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="taokhoatuhoc">
                  <Link href="/course/create-course-self">
                    <a>Tạo khóa tự học</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="listkhoahoc">
                  <Link href="/course/course-list">
                    <a>Danh sách khóa học</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="listkhoatuhoc">
                  <Link href="/course/course-list-self">
                    <a>Danh sách khóa tự học</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={
                  <span className="anticon">
                    <CheckSquare />
                  </span>
                }
                title="Kiểm tra"
              >
                <Menu.Item key="kt1">Lịch trống giáo viên</Menu.Item>
                <Menu.Item key="kt2">Kiểm tra lịch nhiều giáo viên</Menu.Item>
                <Menu.Item key="kt3">Kiểm tra nhiều ca</Menu.Item>
                <Menu.Item key="kt4">Kiểm tra một ca</Menu.Item>
                <Menu.Item key="kt5">Kiểm tra phòng</Menu.Item>
              </SubMenu>

              <Menu.Item
                key="dsbc"
                icon={
                  <span className="anticon">
                    <List />
                  </span>
                }
              >
                <Link href="/">Danh sách khóa báo cáo</Link>
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
                  <Link href="/layoutBase/layoutTables">Tables</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link href="/layoutBase/layoutButtons">Button</Link>
                </Menu.Item>
                <Menu.Item key="11">
                  <Link href="/layoutBase/layoutForms">Form</Link>
                </Menu.Item>
                <Menu.Item key="12">
                  <Link href="/layoutBase/layoutCharts">Charts</Link>
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
            <Menu.ItemGroup key="course" title="Khách hàng">
              <SubMenu
                key="sub-list-course-child"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Học viên"
              >
                <Menu.Item key="hv1">
                  <Link href="/customer/student/student-list">
                    <a> Dữ liệu học viên</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="hv2">
                  <Link href="/customer/student/exchange-student">
                    <a>Học viên chuyển giao</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="hv3">
                  <Link href="/customer/student/student-course">
                    <a> HV trong khóa</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="hv4">
                  <Link href="/customer/student/student-change-course">
                    <a> HV chuyển khóa</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="5">
                  <Link href="/customer/student/student-appointment">
                    <a> HV hẹn đăng ký</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link href="/customer/student/student-reserve">
                    <a> HV bảo lưu</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link href="/customer/student/student-advisory">
                    <a> HV cần tư vấn</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-2"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Thi, hẹn test và dịch vụ"
              >
                <Menu.Item key="1">
                  <Link href="/customer/service/service-customer">
                    <a>Khách mua dịch vụ</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/customer/service/service-customer-exam">
                    <a> Danh sách đăng kí thi</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link href="/customer/service/">Thêm lịch hẹn test</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link href="/customer/service/service-appointment-test">
                    <a> Danh sách khách hẹn test</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link href="/customer/service/service-package-customer">
                    <a> Danh sách khách mua gói</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link href="/customer/service/service-package-result">
                    <a> Danh sách kết quả test</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-3"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Báo cáo học viên"
              >
                <Menu.Item key="1">
                  <Link href="/customer/report/report-customer-warning">
                    <a> Cảnh báo học viên</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/customer/report/report-customer-test">
                    <a> Học viên sắp thi</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link href="/customer/report/report-customer-result">
                    <a> Kết quả thi thực tế</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-4"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Báo cáo học viên"
              >
                <Menu.Item key="1">
                  <Link href="/customer/finance/finance-customer-debts">
                    <a> Nợ học phí</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/customer/finance/finance-cashier-refund">
                    <a> Nợ học phí</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link href="/customer/finance/finance-cashier-invoice">
                    <a> Phiếu thu</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link href="/customer/finance/finance-cashier-payment">
                    <a> Phiếu chi</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link href="/customer/finance/finance-customer-reward">
                    <a> Thưởng/Tài trợ</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-5"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Hợp đồng"
              >
                <Menu.Item key="1">
                  <Link href="/customer/contract/contract-customer-list">
                    <a> Học viên có hợp đồng</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/customer/contract/contract-customer-censorship">
                    <a> Duyệt hợp đồng</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </Menu>

          {/* <Menu
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
          </Menu> */}
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

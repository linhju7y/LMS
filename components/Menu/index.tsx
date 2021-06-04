import { Menu, Button } from "antd";
import React, {
  useEffect,
  useState,
  useReducer,
  PureComponent,
  useRef,
} from "react";
import { useRouter } from "next/router";

import { BarChart, Bar, LineChart, Line } from "recharts";

import {
  PaperClipOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { type } from "os";

import ReactHtmlParser from "react-html-parser";

import { dataMenu } from "~/lib/data-menu";
import { useWrap } from "~/wrapper/wrap";

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
  Tool,
  DollarSign,
  Briefcase,
  Info,
  FileText,
} from "react-feather";
import Link from "next/link";
import { is } from "date-fns/locale";
import { icons } from "antd/lib/image/PreviewGroup";

type dataMenu = [];

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

type propState = {
  collapsed: boolean;
};

const MenuDefault = ({
  isOpen,
  isOpenMenu,
}: {
  isOpen: boolean;
  isOpenMenu: Function;
}) => {
  // const router = useRouter();
  // const getRouter = router.pathname;

  const { getRouter } = useWrap();

  const [state, setState] = useState<propState>({
    collapsed: isOpen,
  } as propState);
  const [isHover, setIsHover] = useState({
    changeHeight: null,
    status: false,
    position: null,
  });

  const [tab, tabSet] = useState<String>("tab-home");
  const [subMenuActive, setSubMenuActive] = useState("");
  const menuChild = useRef(null);
  const [posMenu, setPosMenu] = useState(null);
  const [openKeys, setOpenKeys] = useState(null);
  const [statusOpen, setStatusOpen] = useState<boolean>(false);
  const [sameTab, setSameTab] = useState(false);

  console.log("Is hover: ", isHover);

  const changeTabs = (e) => {
    e.preventDefault();

    let element = e.target;
    let position = element.getBoundingClientRect();
    setPosMenu(position);

    if (!isOpen) {
      let dataTab = e.target.getAttribute("data-tabs");

      dataTab === tab ? setSameTab(true) : tabSet(dataTab);

      setStatusOpen(true);

      setIsHover({
        ...isHover,
        status: true,
        changeHeight: false,
      });
    }
  };

  const changeTabsClick = (e) => {
    e.preventDefault();

    let dataTab = e.target.getAttribute("data-tabs");
    tabSet(dataTab);
  };

  const closeTabs = (e) => {
    e.preventDefault();

    // Xóa tab trước khi tìm active tab
    tabSet("");

    // Func tìm active tap
    FindTabActive();

    // Reset is Hover
    if (isHover.status) {
      setStatusOpen(false);
      setIsHover({
        changeHeight: false,
        status: false,
        position: null,
      });
    }
  };

  const FindTabActive = () => {
    dataMenu.forEach((menu, index) => {
      menu.MenuItem.forEach((item, ind) => {
        if (item.ItemType === "sub-menu") {
          item.SubMenuList.forEach((itemSub, key) => {
            if (itemSub.Route === getRouter) {
              tabSet(menu.MenuName);
              return false;
            }
          });
        } else {
          if (item.Route === getRouter) {
            tabSet(menu.MenuName);
            return false;
          }
        }
      });
    });
  };

  const FindSubMenuActive = () => {
    let SubMenuActive = "";
    dataMenu.forEach((menu, index) => {
      menu.MenuItem.forEach((item, ind) => {
        if (item.ItemType === "sub-menu") {
          item.SubMenuList.forEach((itemSub, key) => {
            if (itemSub.Route === getRouter) {
              setSubMenuActive(item.Key);
              return false;
            }
          });
        }
      });
    });
  };

  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
    if (openKeys.length > 0) {
      for (const value of openKeys) {
        dataMenu.forEach((menu, index) => {
          menu.MenuItem.forEach((item, ind) => {
            if (item.ItemType === "sub-menu") {
              if (item.Key === value) {
                setSubMenuActive(value);
                return false;
              }
            }
          });
        });
      }
    } else {
      setSubMenuActive("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // Get height Screen window
      let heightScr = window.innerHeight;
      heightScr = heightScr / 2;

      // Get height menu when hover
      let heightMenu = menuChild.current.clientHeight;

      if (!isOpen) {
        if (openKeys.length > 0) {
          if (heightMenu > heightScr) {
            setIsHover({
              ...isHover,
              changeHeight: true,
            });
          }
        } else {
          setIsHover({
            ...isHover,
            changeHeight: false,
          });
        }
      }
    }, 200);
  }, [openKeys]);

  useEffect(() => {
    FindSubMenuActive();
    FindTabActive();
  }, [getRouter]);

  useEffect(() => {
    !isOpen &&
      (setIsHover({
        ...isHover,
        status: false,
      }),
      FindTabActive());
  }, [isOpen]);

  const changeTabsWithPostion = () => {
    console.log("runn");
    // Get height menu when hover
    let heightMenu = menuChild.current.clientHeight;

    // Get height Screen window
    let heightScr = window.innerHeight;

    if (posMenu !== null) {
      // Get position menu when hover
      const position = posMenu;

      setIsHover({
        changeHeight: !isOpen && heightMenu > heightScr / 2 ? true : false,
        status: !statusOpen ? false : true,
        position: !statusOpen
          ? null
          : heightMenu > heightScr / 2
          ? position.top > heightScr / 3
            ? position.top - heightScr / 3
            : position.top - 65
          : position.top - 52,
      });
    }
  };

  useEffect(() => {
    changeTabsWithPostion();
  }, [tab]);

  useEffect(() => {
    if (sameTab) {
      changeTabsWithPostion();
      setTimeout(() => {
        setSameTab(false);
      }, 100);
    }
  }, [sameTab]);

  const menuParent = [
    {
      TabName: "tab-course",
    },
    {
      TabName: "tab-student",
    },
    {
      TabName: "tab-staff",
    },
    {
      TabName: "tab-package",
    },
    {
      TabName: "tab-layout",
    },
    {
      TabName: "tab-option",
    },
    {
      TabName: "tab-document",
    },
  ];

  return (
    <aside className={`navbar-right `}>
      <div className="menu-parent">
        <div className="menu-parent-logo">
          <Link href="/dashboard">
            <a>
              {" "}
              <img className="logo-img" src="/images/logo.png"></img>
            </a>
          </Link>
        </div>
        <div className="menu-parent-body">
          <ul className="list-menu">
            <li className={tab === "tab-home" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-home"
              >
                <Home />
              </a>
            </li>

            <li className={tab === "tab-course" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-course"
              >
                <Airplay />
              </a>
            </li>
            <li className={tab === "tab-student" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-student"
              >
                <User />
              </a>
            </li>
            <li className={tab === "tab-staff" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-staff"
              >
                <UserCheck />
              </a>
            </li>
            <li className={tab === "tab-package" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-package"
              >
                <Package />
              </a>
            </li>

            <li className={tab === "tab-document" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-document"
              >
                <Book />
              </a>
            </li>
            <li className={tab === "tab-question-bank" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-question-bank"
              >
                <FileText />
              </a>
            </li>
            <li className={tab === "tab-option" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-option"
              >
                <Tool />
              </a>
            </li>
            <li className={tab === "tab-layout" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-layout"
              >
                <Layers />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`menu-child-bg ${
          !isOpen && `${isHover.status ? "open" : ""}`
        }`}
        onMouseEnter={closeTabs}
      ></div>
      <div
        className={`menu-child  ${
          !isOpen && `close  ${isHover.status ? "hover-open" : ""} `
        }`}
      >
        {/* <div className="app-header-logo">
          <p style={{ display: isOpen ? "block" : "none" }}>Mona Media</p>
          <p style={{ display: !isOpen ? "block" : "none" }}>M</p>
        </div> */}
        <div
          className={`menu-child-body ${
            isHover.changeHeight ? "change-height" : ""
          }`}
          ref={menuChild}
          style={{
            top: isHover.status ? isHover.position : "unset",
          }}
        >
          {dataMenu?.map((menu, indexMenu) => (
            <>
              <Menu
                onOpenChange={onOpenChange}
                selectedKeys={[getRouter == "/" ? "/dashboard" : getRouter]}
                openKeys={[subMenuActive]}
                mode="inline"
                theme="light"
                style={{ display: tab === menu.MenuName ? "block" : "none" }}
              >
                <Menu.ItemGroup key={menu.MenuKey} title={menu.MenuTitle}>
                  {menu.MenuItem?.map((item, indexItem) =>
                    item.ItemType !== "sub-menu" ? (
                      <Menu.Item
                        key={item.Key}
                        icon={ReactHtmlParser(item.Icon)}
                      >
                        <Link href={item.Route}>
                          <a>{item.Text}</a>
                        </Link>
                      </Menu.Item>
                    ) : (
                      <SubMenu
                        key={item.Key}
                        icon={ReactHtmlParser(item.Icon)}
                        title={item.TitleSub}
                      >
                        {item?.SubMenuList.map((subitem, indexSubitem) => (
                          <Menu.Item
                            key={subitem.Key}
                            icon={ReactHtmlParser(subitem.Icon)}
                          >
                            <Link href={subitem.Route}>
                              <a>{subitem.Text}</a>
                            </Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    )
                  )}
                </Menu.ItemGroup>
              </Menu>
            </>
          ))}
          {/* <Menu
            mode="inline"
            theme="light"
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
                <Link href="/admin/dashboard">
                  <a>Trang chủ</a>
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu> */}
          {/* <Menu
            mode="inline"
            theme="light"
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

              <Menu.Item
                key="calendar-study"
                icon={
                  <span className="anticon">
                    <Calendar />
                  </span>
                }
              >
                <Link href="/course/schedule-study">
                  <a>Kiểm tra lịch học</a>
                </Link>
              </Menu.Item>

              <Menu.Item
                key="dsbc"
                icon={
                  <span className="anticon">
                    <List />
                  </span>
                }
              >
                <Link href="/course/course-list-report">
                  <a>Danh sách khóa học - báo cáo</a>
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>

          <Menu
            mode="inline"
            theme="light"
            style={{ display: tab === "tab-layout" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="course" title="Component Layout">
              <SubMenu
                key="sublayout"
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
            mode="inline"
            theme="light"
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

                <Menu.Item key="hv5">
                  <Link href="/customer/student/student-appointment">
                    <a> HV hẹn đăng ký</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="hv6">
                  <Link href="/customer/student/student-reserve">
                    <a> HV bảo lưu</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="hv7">
                  <Link href="/customer/student/student-advisory">
                    <a> HV cần tư vấn</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-2"
                icon={
                  <span className="anticon">
                    <Info />
                  </span>
                }
                title="Thi, hẹn test và dịch vụ"
              >
                <Menu.Item key="sv1">
                  <Link href="/customer/service/service-customer">
                    <a>Khách mua dịch vụ</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sv2">
                  <Link href="/customer/service/service-customer-exam">
                    <a> Danh sách đăng kí thi</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sv3">
                  <Link href="/customer/service/service-info-student">
                    Thêm lịch hẹn test
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link href="/customer/service/service-appointment-test">
                    <a> Danh sách khách hẹn test</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sv5">
                  <Link href="/customer/service/service-package-customer">
                    <a> Danh sách khách mua gói</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="sv6">
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
                <Menu.Item key="bc1">
                  <Link href="/customer/report/report-customer-warning">
                    <a> Cảnh báo học viên</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="bc2">
                  <Link href="/customer/report/report-customer-test">
                    <a> Học viên sắp thi</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="bc3">
                  <Link href="/customer/report/report-customer-result">
                    <a> Kết quả thi thực tế</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-4"
                icon={
                  <span className="anticon">
                    <DollarSign />
                  </span>
                }
                title="Tài chính"
              >
                <Menu.Item key="tc1">
                  <Link href="/customer/finance/finance-customer-debts">
                    <a> Nợ học phí</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="tc2">
                  <Link href="/customer/finance/finance-cashier-refund">
                    <a> Yêu cầu hoàn tiền</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="tc3">
                  <Link href="/customer/finance/finance-cashier-invoice">
                    <a> Phiếu thu</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="tc4">
                  <Link href="/customer/finance/finance-cashier-payment">
                    <a> Phiếu chi</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="tc5">
                  <Link href="/customer/finance/finance-customer-reward">
                    <a> Thưởng/Tài trợ</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub-list-course-child-5"
                icon={
                  <span className="anticon">
                    <Briefcase />
                  </span>
                }
                title="Hợp đồng"
              >
                <Menu.Item key="hd1">
                  <Link href="/customer/contract/contract-customer-list">
                    <a> Học viên có hợp đồng</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="hd2">
                  <Link href="/customer/contract/contract-customer-censorship">
                    <a> Duyệt hợp đồng</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </Menu> */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/* linhmhl menu  */}
          {/* <Menu
            mode="inline"
            theme="light"
            style={{ display: tab === "tab-option" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="course" title="Option">
              <SubMenu
                key="sub100"
                icon={
                  <span className="anticon">
                    <Tool />
                  </span>
                }
                title="Cấu hình"
              >
                <Menu.Item key="ot23">
                  <Link href="/option/center">Trung tâm</Link>
                </Menu.Item>
                <Menu.Item key="ot22">
                  <Link href="/option/grade">Khối học</Link>
                </Menu.Item>
                <Menu.Item key="ot21">
                  <Link href="/option/study-time">Ca học</Link>
                </Menu.Item>
                <Menu.Item key="ot20">
                  <Link href="/option/program">Chương trình</Link>
                </Menu.Item>
                <Menu.Item key="ot19">
                  <Link href="/option/provincial">Tỉnh/Tp</Link>
                </Menu.Item>
                <Menu.Item key="ot18">
                  <Link href="/option/district">Quận huyện</Link>
                </Menu.Item>
                <Menu.Item key="ot17">
                  <Link href="/option/discount">Mã khuyến mãi</Link>
                </Menu.Item>
                <Menu.Item key="ot16">
                  <Link href="/option/customer-supplier">Nguồn khách hàng</Link>
                </Menu.Item>
                <Menu.Item key="ot15">
                  <Link href="/option/day-off">Ngày nghỉ</Link>
                </Menu.Item>
                <Menu.Item key="ot14">
                  <Link href="/option/jobs">Nghề nghiệp</Link>
                </Menu.Item>
                <Menu.Item key="ot13">
                  <Link href="/option/services">Dịch vụ</Link>
                </Menu.Item>
                <Menu.Item key="ot12">
                  <Link href="/option/feedback">Loại phản hồi</Link>
                </Menu.Item>
                <Menu.Item key="ot11">
                  <Link href="/option/supplier">Nhà cung cấp</Link>
                </Menu.Item>
                <Menu.Item key="ot10">
                  <Link href="/option/purpose">Mục đích học</Link>
                </Menu.Item>
                <Menu.Item key="ot9">
                  <Link href="/option/staff-salary">Lương office</Link>
                </Menu.Item>
                <Menu.Item key="ot8">
                  <Link href="/option/teacher-salary">Lương giáo viên</Link>
                </Menu.Item>
                <Menu.Item key="ot7">
                  <Link href="/option/exam">Đợt thi</Link>
                </Menu.Item>
                <Menu.Item key="ot6">
                  <Link href="/option/post">Kiểm duyệt bài viết</Link>
                </Menu.Item>
                <Menu.Item key="ot5">
                  <Link href="/option/info-form">Form thông tin</Link>
                </Menu.Item>
                <Menu.Item key="ot4">
                  <Link href="/option/notification">Tạo thông báo</Link>
                </Menu.Item>
                <Menu.Item key="ot3">
                  <Link href="/option/idiom">Thành ngữ lịch</Link>
                </Menu.Item>
                <Menu.Item key="ot2">
                  <Link href="/option/contract">Hợp đồng</Link>
                </Menu.Item>
                <Menu.Item key="ot1">
                  <Link href="/option/term-of-service">Điều khoản</Link>
                </Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </Menu>
          {/*  */}
          {/* linhmenu document-list */}
          {/* <Menu
            mode="inline"
            theme="light"
            style={{ display: tab === "tab-document" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="document" title="Document List">
              <Menu.Item key="dm1">
                <Link href="/document-list">Danh sách tài liệu</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>

          <Menu
            mode="inline"
            theme="light"
            style={{ display: tab === "tab-staff" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="staff" title="Quản lí nhân viên">
              <SubMenu
                key="sub-list-staff-child-1"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Nhân viên"
              >
                <Menu.Item key="nv1">
                  <Link href="/staff/staff-list">
                    <a>Danh sách nhân viên</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="nv2">
                  <Link href="/staff/saler-list">
                    <a>Danh sách Salers</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="nv3">
                  <Link href="/staff/feedback-list">
                    <a>Duyệt feedback</a>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub-list-staff-child-2"
                icon={
                  <span className="anticon">
                    <User />
                  </span>
                }
                title="Giáo viên"
              >
                <Menu.Item key="gv1">
                  <Link href="/staff/teacher-list">
                    <a>Giáo viên</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="gv2">
                  <Link href="/staff/exercise-done-list">
                    <a>Bài đã chấm</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="gv3">
                  <Link href="/staff/exercise-check-list">
                    <a>Duyệt bài</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="gv4">
                  <Link href="/staff/teach-hours-list">
                    <a>Giờ dạy giáo viên</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="gv5">
                  <Link href="/staff/teach-hours-center">
                    <a>Giờ dạy GV theo trung tâm</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="gv6">
                  <Link href="/staff/cost-list">
                    <a>Giá vốn hàng bán</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="gv7">
                  <Link href="/staff/teacher-salary-list">
                    <a>Chi phí lương giáo viên</a>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub-list-staff-child-3"
                icon={
                  <span className="anticon">
                    <DollarSign />
                  </span>
                }
                title="Lương Office"
              >
                <Menu.Item key="s1">
                  <Link href="/staff/campaign-sales">
                    <a>Chiến dịch sale</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="s2">
                  <Link href="/staff/salary-review">
                    <a>Duyệt lương office</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="s3">
                  <Link href="/staff/salary-history">
                    <a>Lịch sử duyệt</a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="s4">
                  <Link href="/staff/campaign-revenue">
                    <a>Doanh thu chiến dịch sale</a>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </Menu>

          <Menu
            mode="inline"
            theme="light"
            style={{ display: tab === "tab-package" ? "block" : "none" }}
          >
            <Menu.ItemGroup key="staff" title="Gói bài tập">
              <Menu.Item key="pk1">
                <Link href="/package/package-list">
                  <a>Quản lí gói bài</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="pk2">
                <Link href="/package/topic-list">
                  <a>Topic</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="pk3">
                <Link href="/package/examiner-list">
                  <a>Danh sách chấm gói bài</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="pk4">
                <Link href="/package/package-set">
                  <a>Bộ sưu tập</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="pk5">
                <Link href="/package/package-store">
                  <a>Cửa hàng</a>
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu> */}

          {/* <div className="menu-child-info white">
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
                  stroke-width={2}
                />
              </LineChart>
            </div>
          </div> */}
        </div>
      </div>
    </aside>
  );
};

export default MenuDefault;

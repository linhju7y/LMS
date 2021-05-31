import { Menu, Button } from "antd";
import React, { useEffect, useState, useReducer, PureComponent } from "react";
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

const dataMenu = [
  {
    MenuName: "tab-course",
    MenuTitle: "Khóa học",
    MenuKey: "course",
    MenuItem: [
      {
        ItemType: "sub-menu",
        Key: "sub-course",
        Icon: '<span class="anticon"><img src="/images/icons/study-course.svg" ></span>',
        TitleSub: "Quản lí khóa học",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/course/create-course",
            Route: "/course/create-course",
            Text: "Tạo khóa học",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/course/create-course-self",
            Route: "/course/create-course-self",
            Text: "Tạo khóa tự học",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/course/course-list",
            Route: "/course/course-list",
            Text: "Danh sách khóa học",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/course/course-list-self",
            Route: "/course/course-list-self",
            Text: "Danh sách khóa tự học",
            Icon: "",
          },
        ],
      },
      {
        TypeItem: "single",
        Key: "/course/schedule-study",
        Icon: '<span class="anticon"><img src="/images/icons/calendar.svg"></span>',
        Route: "/course/schedule-study",
        Text: "Kiểm tra lịch học",
      },
      {
        TypeItem: "single",
        Key: "/course/course-list-report",
        Icon: '<span class="anticon"><img src="/images/icons/list.svg"></span>',
        Route: "/course/course-list-report",
        Text: "Danh sách khóa học - báo cáo",
      },
    ],
  },
  {
    MenuName: "tab-layout",
    MenuTitle: "Giao diện",
    MenuKey: "tablayout",
    MenuItem: [
      {
        ItemType: "sub-menu",
        Key: "sublayout",
        Icon: "",
        TitleSub: "Layout",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/layoutBase/layoutTables",
            Route: "/layoutBase/layoutTables",
            Text: "Tables",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/layoutBase/layoutButtons",
            Route: "/layoutBase/layoutButtons",
            Text: "Buttons",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/layoutBase/layoutForms",
            Route: "/layoutBase/layoutForms",
            Text: "Forms",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/layoutBase/layoutCharts",
            Route: "/layoutBase/layoutCharts",
            Text: "Charts",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/layoutBase/layoutTags",
            Route: "/layoutBase/layoutTags",
            Text: "Tags",
            Icon: "",
          },
        ],
      },
    ],
  },
  {
    MenuName: "tab-student",
    MenuTitle: "Khách hàng",
    MenuKey: "course",
    MenuItem: [
      {
        ItemType: "sub-menu",
        Key: "sub-list-course-child",
        Icon: "",
        TitleSub: "Học viên",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/customer/student/student-list",
            Route: "/customer/student/student-list",
            Text: "Dữ liệu học viên",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/student/exchange-student",
            Route: "/customer/student/exchange-student",
            Text: "Học viên chuyển giao",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/student/student-course",
            Route: "/customer/student/student-course",
            Text: "HV trong khóa",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/student/student-change-course",
            Route: "/customer/student/student-change-course",
            Text: "HV chuyển khóa",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/student/student-appointment",
            Route: "/customer/student/student-appointment",
            Text: "HV hẹn đăng ký",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/student/student-reserve",
            Route: "/customer/student/student-reserve",
            Text: "HV bảo lưu",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/student/student-advisory",
            Route: "/customer/student/student-advisory",
            Text: "HV cần tư vấn",
            Icon: "",
          },
        ],
      },
      {
        ItemType: "sub-menu",
        Key: "sub-list-course-child-2",
        Icon: "",
        TitleSub: "Thi, hẹn test và dịch vụ",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/customer/service/service-customer",
            Route: "/customer/service/service-customer",
            Text: "Khách mua dịch vụ",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/service/service-customer-exam",
            Route: "/customer/service/service-customer-exam",
            Text: "Danh sách đăng kí thi",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/service/service-info-student",
            Route: "/customer/service/service-info-student",
            Text: "Thêm lịch hẹn test",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/service/service-appointment-test",
            Route: "/customer/service/service-appointment-test",
            Text: "Danh sách khách hẹn test",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/service/service-package-customer",
            Route: "/customer/service/service-package-customer",
            Text: "Danh sách khách mua gói",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/service/service-package-result",
            Route: "/customer/service/service-package-result",
            Text: "Danh sách kết quả test",
            Icon: "",
          },
        ],
      },
      {
        ItemType: "sub-menu",
        Key: "sub-list-course-child-3",
        Icon: "",
        TitleSub: "Báo cáo học viên",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/customer/report/report-customer-warning",
            Route: "/customer/report/report-customer-warning",
            Text: "Cảnh báo học viên",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/report/report-customer-test",
            Route: "/customer/report/report-customer-test",
            Text: "Học viên sắp thi",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/report/report-customer-result",
            Route: "/customer/report/report-customer-result",
            Text: "Kết quả thi thực tế",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/report/report-customer-result",
            Route: "/customer/report/report-customer-result",
            Text: "Kết quả thi thực tế",
            Icon: "",
          },
        ],
      },
      {
        ItemType: "sub-menu",
        Key: "sub-list-course-child-4",
        Icon: "",
        TitleSub: "Tài chính",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/customer/finance/finance-customer-debts",
            Route: "/customer/finance/finance-customer-debts",
            Text: "Nợ học phí",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/finance/finance-cashier-refund",
            Route: "/customer/finance/finance-cashier-refund",
            Text: "Yêu cầu hoàn tiền",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/finance/finance-cashier-payment",
            Route: "/customer/finance/finance-cashier-payment",
            Text: "Phiếu chi",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/finance/finance-customer-reward",
            Route: "/customer/finance/finance-customer-reward",
            Text: "Thưởng/Tài trợ",
            Icon: "",
          },
        ],
      },
      {
        ItemType: "sub-menu",
        Key: "sub-list-course-child-5",
        Icon: "",
        TitleSub: "Hợp đồng",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/customer/contract/contract-customer-list",
            Route: "/customer/contract/contract-customer-list",
            Text: "Học viên có hợp đồng",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/customer/contract/contract-customer-censorship",
            Route: "/customer/contract/contract-customer-censorship",
            Text: "Duyệt hợp đồng",
            Icon: "",
          },
        ],
      },
    ],
  },
  {
    MenuName: "tab-option",
    MenuTitle: "Option",
    MenuKey: "taboption",
    MenuItem: [
      {
        ItemType: "sub-menu",
        Key: "sub-option",
        Icon: "",
        TitleSub: "Cấu hình",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/option/center",
            Route: "/option/center",
            Text: "Trung tâm",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/grade",
            Route: "/option/grade",
            Text: "Khối học",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/study-time",
            Route: "/option/study-time",
            Text: "Ca học",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/program",
            Route: "/option/program",
            Text: "Chương trình",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/provincial",
            Route: "/option/provincial",
            Text: "Tỉnh/Tp",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/district",
            Route: "/option/district",
            Text: "Quận huyện",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/discount",
            Route: "/option/discount",
            Text: "Mã khuyến mãi",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/customer-supplier",
            Route: "/option/customer-supplier",
            Text: "Nguồn khách hàng",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/day-off",
            Route: "/option/day-off",
            Text: "Ngày nghỉ",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/jobs",
            Route: "/option/jobs",
            Text: "Nghề nghiệp",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/services",
            Route: "/option/services",
            Text: "Dịch vụ",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/feedback",
            Route: "/option/feedback",
            Text: "Loại phản hồi",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/supplier",
            Route: "/option/supplier",
            Text: "Nhà cung cấp",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/purpose",
            Route: "/option/purpose",
            Text: "Mục đích học",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/staff-salary",
            Route: "/option/staff-salary",
            Text: "Lương office",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/teacher-salary",
            Route: "/option/teacher-salary",
            Text: "Lương giáo viên",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/exam",
            Route: "/option/exam",
            Text: "Đợt thi",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/post",
            Route: "/option/post",
            Text: "Kiểm duyệt bài viết",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/info-form",
            Route: "/option/info-form",
            Text: "Form thông tin",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/notification",
            Route: "/option/notification",
            Text: "Tạo thông báo",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/idiom",
            Route: "/option/idiom",
            Text: "Thành ngữ lịch",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/contract",
            Route: "/option/contract",
            Text: "Hợp đồng",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/option/term-of-service",
            Route: "/option/term-of-service",
            Text: "Điều khoản",
            Icon: "",
          },
        ],
      },
    ],
  },
  {
    MenuName: "tab-document",
    MenuTitle: "Document List",
    MenuKey: "tabdocument",
    MenuItem: [
      {
        ItemType: "single",
        Key: "/document-list",
        Route: "/document-list",
        Text: "Danh sách tài liệu",
        Icon: "",
      },
    ],
  },
  {
    MenuName: "tab-staff",
    MenuTitle: "Quản lí nhân viên",
    MenuKey: "tab-staff",
    MenuItem: [
      {
        ItemType: "sub-menu",
        Key: "sub-list-staff-child-1",
        Icon: "",
        TitleSub: "Nhân viên",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/staff/staff-list",
            Route: "/staff/staff-list",
            Text: "Danh sách nhân viên",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/saler-list",
            Route: "/staff/saler-list",
            Text: "Danh sách Salers",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/feedback-list",
            Route: "/staff/feedback-list",
            Text: "Duyệt feedback",
            Icon: "",
          },
        ],
      },
      {
        ItemType: "sub-menu",
        Key: "sub-list-staff-child-2",
        Icon: "",
        TitleSub: "Giáo viên",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/staff/teacher-list",
            Route: "/staff/teacher-list",
            Text: "Giáo viên",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/exercise-done-list",
            Route: "/staff/exercise-done-list",
            Text: "Bài đã chấm",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/exercise-check-list",
            Route: "/staff/exercise-check-list",
            Text: "Duyệt bài",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/teach-hours-list",
            Route: "/staff/teach-hours-list",
            Text: "Giờ dạy giáo viên",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/teach-hours-center",
            Route: "/staff/teach-hours-center",
            Text: "Giờ dạy GV theo trung tâm",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/cost-list",
            Route: "/staff/cost-list",
            Text: "Giá vốn hàng bán",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/teacher-salary-list",
            Route: "/staff/teacher-salary-list",
            Text: "Chi phí lương giáo viên",
            Icon: "",
          },
        ],
      },

      {
        ItemType: "sub-menu",
        Key: "sub-list-staff-child-3",
        Icon: "",
        TitleSub: "Lương Office",
        SubMenuList: [
          {
            ItemType: "single",
            Key: "/staff/campaign-sales",
            Route: "/staff/campaign-sales",
            Text: "Chiến dịch sale",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/salary-review",
            Route: "/staff/salary-review",
            Text: "Duyệt lương office",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/salary-history",
            Route: "/staff/salary-history",
            Text: "Lịch sử duyệt",
            Icon: "",
          },
          {
            ItemType: "single",
            Key: "/staff/campaign-revenue",
            Route: "/staff/campaign-revenue",
            Text: "Doanh thu chiến dịch sale",
            Icon: "",
          },
        ],
      },
    ],
  },
  {
    MenuName: "tab-package",
    MenuTitle: "Gói bài tập",
    MenuKey: "tab-package",
    MenuItem: [
      {
        ItemType: "single",
        Key: "/package/package-list",
        Route: "/package/package-list",
        Text: "Quản lí gói bài",
        Icon: "",
      },
      {
        ItemType: "single",
        Key: "/package/topic-list",
        Route: "/package/topic-list",
        Text: "Topic",
        Icon: "",
      },
      {
        ItemType: "single",
        Key: "/package/examiner-list",
        Route: "/package/examiner-list",
        Text: "Danh sách chấm gói bài",
        Icon: "",
      },
      {
        ItemType: "single",
        Key: "/package/package-set",
        Route: "/package/package-set",
        Text: "Bộ sưu tập",
        Icon: "",
      },
      {
        ItemType: "single",
        Key: "/package/package-store",
        Route: "/package/package-store",
        Text: "Cửa hàng",
        Icon: "",
      },
    ],
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

  const router = useRouter();
  const getRouter = router.pathname;

  const [state, setState] = useState<propState>({
    collapsed: isOpen,
  } as propState);
  const [isHover, setIsHover] = useState({
    status: false,
    position: null,
  });

  const [tab, tabSet] = useState<String>("tab-course");

  const changeTabs = (e) => {
    e.preventDefault();

    let heightScr = window.innerHeight;
    console.log("Height SCR: ", heightScr);

    let element = e.target;
    let position = element.getBoundingClientRect();

    if (!isOpen) {
      setIsHover({
        status: true,
        position: position.top - 65,
      });
      let dataTab = e.target.getAttribute("data-tabs");
      tabSet(dataTab);
    }
  };

  const changeTabsClick = (e) => {
    e.preventDefault();

    let dataTab = e.target.getAttribute("data-tabs");
    tabSet(dataTab);
  };

  const closeTabs = (e) => {
    e.preventDefault();
    if (isHover.status) {
      setIsHover({
        ...isHover,
        status: false,
      });
    }
  };

  const [subMenuActive, setSubMenuActive] = useState("");

  console.log("Tab Active: ", subMenuActive);

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

  useEffect(() => {
    FindSubMenuActive();
    FindTabActive();

    !isOpen &&
      setIsHover({
        ...isHover,
        status: false,
      });
  }, [isOpen]);

  // useEffect(() => {
  //   let itemLink = document.querySelectorAll(".ant-menu-item");
  //   console.log(itemLink);
  //   for (let i = 0; i < itemLink.length; i++) {
  //     itemLink[i].addEventListener("click", function () {
  //       alert("hi");
  //     });
  //   }
  // }, [tab]);

  const testFunc = (openKeys) => {
    console.log("openKeys: ", openKeys);

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

  return (
    <aside className={`navbar-right `}>
      <div className="menu-parent">
        <div className="menu-parent-logo">
          <img className="logo-img" src="/images/logo.png"></img>
        </div>
        <div className="menu-parent-body">
          <ul className="list-menu">
            {/* <li className={tab === "tab-home" ? "active" : ""}>
              <a
                href="#"
                onClick={changeTabsClick}
                onMouseEnter={changeTabs}
                data-tabs="tab-home"
              >
                <Home />
              </a>
            </li> */}
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
          className="menu-child-body"
          style={{ top: isHover.status && isHover.position }}
        >
          {dataMenu?.map((menu, indexMenu) => (
            <>
              <Menu
                onOpenChange={testFunc}
                selectedKeys={[getRouter]}
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

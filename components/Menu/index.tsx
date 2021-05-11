import { Menu, Button } from "antd";
import React, { useEffect, useState, useReducer } from "react";

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
  BarChart,
  Package,
  Calendar,
  BookOpen,
} from "react-feather";
import Link from "next/link";

const { SubMenu } = Menu;

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
          <img className="logo-img" src="images/logo.png"></img>
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
      </div>
    </aside>
  );
};

export default MenuDefault;

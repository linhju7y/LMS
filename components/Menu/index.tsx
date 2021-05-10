import { Menu, Button } from "antd";
import React, { useEffect, useState } from "react";

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

import { Bookmark, Server, Home, Activity, Airplay } from "react-feather";

const { SubMenu } = Menu;

const MenuDefault = ({ toggle }: { toggle: boolean }) => {
  console.log("Toggle: ", toggle);

  const [state, setState] = useState({
    collapsed: toggle,
  });

  useEffect(() => {
    if (toggle) {
      setState({ collapsed: false });
    } else {
      setState({ collapsed: true });
    }
  }, [toggle]);

  return (
    <aside className={`navbar-right ${!toggle ? "close" : ""}`}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={state.collapsed}
      >
        <Menu.ItemGroup key="all" title="">
          <Menu.Item
            key="1"
            icon={
              <span className="anticon">
                <Home />
              </span>
            }
          >
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<Activity />}>
            Tin tức
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="course" title="Khóa học">
          <SubMenu
            key="sub1"
            icon={
              <span className="anticon">
                <Bookmark />
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
                <Airplay />
              </span>
            }
            title="Quản lí ca học"
          >
            <Menu.Item key="7">Kiểm tra một ca học</Menu.Item>
            <Menu.Item key="8">Kiểm tra nhiều ca</Menu.Item>
          </SubMenu>
        </Menu.ItemGroup>
      </Menu>
    </aside>
  );
};

export default MenuDefault;

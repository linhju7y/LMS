import React, { useState } from "react";
import { Popover, Button } from "antd";

import { Grid } from "react-feather";
import { useAuth } from "~/context/auth";

import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MailOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import TitlePage from "../Elements/TitlePage";

export default function Header({
  toggleMenu,
  toggle,
}: {
  toggle: boolean;
  toggleMenu: Function;
}) {
  const content = (
    <ul className="user-function">
      <li>
        <a href="#">
          <span className="icon">
            <UserOutlined />
          </span>
          <span className="function-name">Profile</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon inbox">
            <MailOutlined />
          </span>
          <span className="function-name">Inbox</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon logout">
            <LogoutOutlined />
          </span>
          <span className="function-name">Log out</span>
        </a>
      </li>
    </ul>
  );

  const { titlePage } = useAuth();

  console.log("Title: ", titlePage);

  let visibleUser: {
    visible: Boolean;
  };

  visibleUser = {
    visible: false,
  };

  const [userFunc, userFuncSet] = useState(false);

  const closeUserFunc = () => {
    userFuncSet(false);
  };

  const openUserFunc = () => {
    userFuncSet(true);
  };

  return (
    <header className={`app-header `}>
      <div className="app-header-logo">
        <p>Mona Media</p>
        {/* <p style={{ display: !toggle ? "block" : "none" }}>M</p> */}
      </div>
      <div className="app-header-inner">
        <div className="right">
          {/* <div className="col-button" onClick={() => toggleMenu()}>
            <div className="box-menu">
              <div className="icon-action">
                {!toggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
            </div>
          </div> */}
          {/* <div className="col-search">
            <div className="box-input">
              <SearchOutlined className="icon-search" />
              <input type="text" placeholder="Search in app..." />
            </div>
          </div> */}
          <div className="col-title-page">
            <TitlePage title={titlePage} />
          </div>
        </div>
        <div className="col-setting">
          <ul className="col-setting-list">
            <li className="notification">
              <span className="notification-icon">
                <i className="fal fa-bell" />
              </span>
              <span className="notification-number">5</span>
            </li>
            <li className="user">
              <Popover
                content={content}
                // visible={userFunc}
                // onVisibleChange={openUserFunc}
                trigger="click"
                title=""
              >
                <div className="user-wrap">
                  <div className="user-img">
                    <img src="/images/user.jpg" alt="" />
                  </div>
                  <div className="user-info">
                    <p className="user-name">An Nguyen</p>
                    <p className="user-position">Teacher</p>
                  </div>
                </div>
              </Popover>
            </li>
            <li>
              <div className="custom">
                {/* <SettingOutlined /> */}
                <Grid />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

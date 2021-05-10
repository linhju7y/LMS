import React, { useState } from "react";
import { Popover, Button } from "antd";

import { Grid } from "react-feather";

import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MailOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

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
    <header className={`app-header ${!toggle ? "close" : ""}`}>
      <div className="app-header-logo">
        <p>Mona Media</p>
        <p style={{ display: !toggle ? "block" : "none" }}>M</p>
      </div>
      <div className="app-header-inner">
        <div className="col-search" onClick={() => toggleMenu()}>
          <div className="box-menu">
            {/* <span className="icon-action">
              <i className="fal fa-bars" />
            </span> */}
            <div className="icon-action">
              {!toggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
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
                    <img src="images/user.jpg" alt="" />
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

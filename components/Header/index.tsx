import React, { useState } from "react";
import { Popover, Button, Input, Select } from "antd";

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
import TitlePageHeader from "../Elements/TitlePageHeader";
const { Search } = Input;

const { Option } = Select;

let countOpen = 0;
export default function Header({
  isOpenMenu,
  isOpen,
}: {
  isOpen: boolean;
  isOpenMenu: Function;
}) {
  const content_search = (
    <div className="input-search">
      <Input className="style-input" placeholder="search" />
      <SearchOutlined />
    </div>
  );
  function onChange(value) {
    console.log(`selected ${value}`);
  }

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

  const [isSearch, setIsSearch] = useState(false);
  const openSearch = () => {
    !isSearch ? setIsSearch(true) : setIsSearch(false);
  };

  const { titlePage } = useAuth();

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

  if (!isOpen) {
    countOpen++;
  }

  return (
    <header className={`app-header `}>
      <div
        className={`app-header-logo ${
          !isOpen ? "close" : countOpen > 0 ? "open" : "open-no-ani"
        }`}
      >
        <p style={{ display: !isOpen ? "none" : "block" }}>Mona Media</p>
        <p style={{ display: !isOpen ? "block" : "none" }}>M</p>
      </div>
      <div className={`app-header-inner ${!isOpen && "close"}`}>
        <div className="right">
          <div className="col-button" onClick={() => isOpenMenu()}>
            <div className="box-menu">
              <div className="icon-action">
                {!isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
            </div>
          </div>
          {/* <div className="col-search">
            <div className="box-input">
              <SearchOutlined className="icon-search" />
              <input type="text" placeholder="Search in app..." />
            </div>
          </div> */}
          <div className="col-title-page">
            <TitlePageHeader title={titlePage} />
          </div>
        </div>
        <div className="col-setting">
          <ul className="col-setting-list">
            {/* <li className="notification">
              <span className="notification-icon">
                <i className="fal fa-bell" />
              </span>
              <span className="notification-number">5</span>
            </li> */}
            <li className="select-center">
              <Select
                className="style-input"
                showSearch
                style={{ width: 200 }}
                placeholder="Chọn trung tâm"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="center-1">Trung tâm Anh Ngữ Zim</Option>
                <Option value="center-2">Trung tâm Việt Hoa</Option>
                <Option value="center-3">Mona Media</Option>
              </Select>
            </li>
            <li className="search">
              <Popover content={content_search} trigger="click">
                <a className="search-icon">
                  <SearchOutlined />
                </a>
              </Popover>
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

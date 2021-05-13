import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MailOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export default function SearchBox() {
  return (
    <div className="search-box">
      <div className="box-input">
        <input type="text" placeholder="Search.." />
        <SearchOutlined className="icon-search" />
      </div>
    </div>
  );
}

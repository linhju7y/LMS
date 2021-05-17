import { Card, Select, Input } from "antd";

export default function SearchBox() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      className="btn-search style-input"
      size="large"
    />
  );
}

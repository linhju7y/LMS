import { Card, Select, Input } from "antd";

const SortBox = () => {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Select
        className="style-input"
        defaultValue="sort-title"
        style={{ width: 120 }}
        onChange={handleChange}
        size="large"
      >
        <Option value="sort-title">-- Sort by --</Option>
        <Option value="hometown1">Tỉnh/TP A - Z</Option>
        <Option value="hometown2">Tỉnh/TP Z - A</Option>
        <Option value="name1">Họ tên A - Z</Option>
        <Option value="name2">Họ tên Z - A</Option>
      </Select>
    </>
  );
};

export default SortBox;

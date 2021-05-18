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
        <Option value="sort-title">Sort by</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  );
};

export default SortBox;

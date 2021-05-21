import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../lib/option/dataOption";
import randomColor from "randomcolor";
import { Tag, Button, Tooltip } from "antd";
import CenterFrom from "~/components/Global/Option/CenterForm";
import { Info, RotateCcw } from "react-feather";
import Link from "next/link";
const Center = () => {
  const [centerForm, setCenterForm] = useState(false);
  const columns = [
    {
      title: "Tên trung tâm",
      dataIndex: "center",
      render: (center) => {
        let color = randomColor();
        return (
          <Tag color={color} key={center}>
            <b> {center.toUpperCase()}</b>
          </Tag>
        );
      },
    },
    { title: "Địa chỉ", dataIndex: "address" },
    { title: "Quận", dataIndex: "district" },
    {
      render: () => (
        <>
          <Link
            href={{
              pathname: "/option/center/rooms/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Xem phòng">
              <Button type="link" icon={<Info />} />
            </Tooltip>
          </Link>

          <Tooltip title="Cập nhật trung tâm">
            <Button
              type="link"
              icon={<RotateCcw />}
              onClick={() => setCenterForm(true)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Danh sách trung tâm" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={
            <Button
              type="primary"
              size="large"
              onClick={() => setCenterForm(true)}
            >
              Thêm trung tâm
            </Button>
          }
          dataSource={data}
          columns={columns}
          Extra={
            <div className="extra-table">
              <SearchBox />
            </div>
          }
        />
      </div>
      <CenterFrom visible={centerForm} onCancel={() => setCenterForm(false)} />
    </div>
  );
};

export default Center;

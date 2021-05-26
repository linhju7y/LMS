import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import randomColor from "randomcolor";
import { Tag, Tooltip } from "antd";
import CenterFrom from "~/components/Global/Option/CenterForm";
import { Info, RotateCcw } from "react-feather";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
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
          <Tag color={color} key={center} className="style-tag">
            <b> {center.toUpperCase()}</b>
          </Tag>
        );
      },
      ...FilterColumn("center"),
    },
    { title: "Địa chỉ", dataIndex: "address", ...FilterColumn("address") },
    { title: "Quận", dataIndex: "district", ...FilterColumn("district") },
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
              <button className="btn btn-icon">
                <Info />
              </button>
            </Tooltip>
          </Link>

          <Tooltip title="Cập nhật trung tâm">
            <button
              className="btn btn-icon edit"
              onClick={() => setCenterForm(true)}
            >
              <RotateCcw />
            </button>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <PowerTable
        TitlePage="Danh sách trung tâm"
        TitleCard={
          <button
            onClick={() => setCenterForm(true)}
            className="btn btn-warning add-new"
          >
            Thêm mới
          </button>
        }
        dataSource={data}
        columns={columns}
        Extra={
          <div className="extra-table">
            <FilterTable />
            <SortBox />
          </div>
        }
      />

      <CenterFrom visible={centerForm} onCancel={() => setCenterForm(false)} />
    </>
  );
};

export default Center;

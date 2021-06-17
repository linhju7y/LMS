import React, { FC, Fragment, useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import randomColor from "randomcolor";
import { Tag, Tooltip } from "antd";
import { Info, RotateCcw } from "react-feather";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import Link from "next/link";
import LayoutBase from "~/components/LayoutBase";
import { branchApi } from "~/pages/api";
import { CenterForm } from "~/components/Global";

const Center = () => {
  const [center, setCenter] = useState<IBranch[]>([]);
  const [centerForm, setCenterForm] = useState(false);
  const columns = [
    {
      title: "Mã trung tâm",
      dataIndex: "BranchCode",
      ...FilterColumn("address"),
    },

    {
      title: "Tên trung tâm",
      dataIndex: "BranchName",
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
    { title: "Địa chỉ", dataIndex: "Address", ...FilterColumn("address") },
    {
      title: "Số điện thoại",
      dataIndex: "Phone",
      ...FilterColumn("district"),
    },
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
  //get data Center
  useEffect(() => {
    branchApi
      .getAll()
      .then((res) => {
        let _data = res.data.createAcc;
        setCenter(_data);
        console.log(_data);
      })
      .finally(() => {});
  }, []);

  return (
    <Fragment>
      <PowerTable
        addClass="basic-header"
        TitlePage="Danh sách trung tâm"
        TitleCard={
          <button
            onClick={() => setCenterForm(true)}
            className="btn btn-warning add-new"
          >
            Thêm mới
          </button>
        }
        dataSource={center}
        columns={columns}
        Extra={
          <div className="extra-table">
            <FilterTable />
            <SortBox />
          </div>
        }
      />

      <CenterForm visible={centerForm} onCancel={() => setCenterForm(false)} />
    </Fragment>
  );
};
Center.layout = LayoutBase;
export default Center;

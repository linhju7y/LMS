import React, { FC, Fragment, useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import randomColor from "randomcolor";
import { Tag, Tooltip, message } from "antd";
import { Info, RotateCcw } from "react-feather";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import Link from "next/link";
import LayoutBase from "~/components/LayoutBase";
import { classApi } from "~/apiBase";

import is from "date-fns/esm/locale/is/index.js";
import { useWrap } from "~/context/wrap";
import ClassForm from "~/components/Global/Option/ClassModal";
import ClassModal from "~/components/Global/Option/ClassModal";

const ClassList = () => {
  const [dataSource, setDataSource] = useState<IClass[]>([]);
  const [ClassForm, setClassForm] = useState(false);
  const [isLoading, setIsLoading] = useState({
    type: "",
    status: false,
  });

  const columns = [
    {
      title: "Tên lớp",
      dataIndex: "ListClassName",
      render: (Class) => {
        let color = randomColor();
        return (
          <Tag color={color} key={Class} className="style-tag">
            <b> {Class.toUpperCase()}</b>
          </Tag>
        );
      },
      ...FilterColumn("ListClassName"),
    },
    {
      title: "Khối học",
      dataIndex: "ListCourseName",
      render: (Class) => {
        let color = randomColor();
        return (
          <Tag color={color} key={Class} className="style-tag">
            <b> {Class.toUpperCase()}</b>
          </Tag>
        );
      },
      ...FilterColumn("ListCourseName"),
    },

    {
      title: "Trung tâm",
      dataIndex: "BranchName",

      ...FilterColumn("BranchName"),
    },

    {
      title: "Học phí",
      dataIndex: "Price",
      ...FilterColumn("Price"),
    },
    {
      title: "Khu vực",
      dataIndex: "AreaName",
      ...FilterColumn("AreaName"),
    },
    {
      render: () => (
        <>
          <Link
            href={{
              pathname: "/option/Class/rooms-detail/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Chi tiết lớp học">
              <button className="btn btn-icon">
                <Info />
              </button>
            </Tooltip>
          </Link>

          <Tooltip title="Cập nhật lớp học">
            <button
              className="btn btn-icon edit"
              onClick={() => setClassForm(true)}
            >
              <RotateCcw />
            </button>
          </Tooltip>
        </>
      ),
    },
  ];

  const { showNoti } = useWrap();
  //get data Class

  const getAllData = () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });

    (async () => {
      try {
        const res = await classApi.getAll();
        setIsLoading({
          type: "GET_ALL",
          status: false,
        });
        res.status == 200 && setDataSource(res.data.createAcc);
      } catch (error) {
        showNoti("danger", error.message);
      }
    })();
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Fragment>
      <PowerTable
        loading={isLoading}
        addClass="basic-header"
        TitlePage="Danh sách trung tâm"
        TitleCard={<ClassModal isLoading={isLoading} />}
        dataSource={dataSource}
        columns={columns}
        Extra={
          <div className="extra-table">
            <FilterTable />
            <SortBox />
          </div>
        }
      />

      {/* <ClassForm visible={ClassForm} onCancel={() => setClassForm(false)} /> */}
    </Fragment>
  );
};
ClassList.layout = LayoutBase;
export default ClassList;

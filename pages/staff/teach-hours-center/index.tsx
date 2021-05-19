import React, { useState } from "react";
import { Table, Card, Tag, Select, Modal } from "antd";
import { FormOutlined, EyeOutlined } from "@ant-design/icons";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { Filter, Eye, CheckCircle } from "react-feather";
import FilterTable from "~/components/Global/TeachHoursCenter/FilterTable";

const TeachHoursCenter = () => {
  const [showFilter, showFilterSet] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataSource = [
    {
      key: "1",
      Teacher: "Mr.Bean",
      Status: "",
      Role: "Manager",
      TypeClass: "Toeic",
      StudyTime: 5,
      Attendance: "Text",
      AttendanceNone: "Text",
      TotalHours: "20",
      DutyTime: "20",
      TotalDutyTime: "22",
    },
  ];

  const columns = [
    {
      title: "Giáo viên",
      dataIndex: "Teacher",
      key: "teacher",
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      key: "status",
      render: (status) => <Tag color="green">Active</Tag>,
    },
    {
      title: "Vai trò",
      dataIndex: "Role",
      key: "role",
    },
    {
      title: "Loại lớp",
      dataIndex: "TypeClass",
      key: "typeclass",
    },

    {
      title: "Giờ dạy",
      dataIndex: "StudyTime",
      key: "studytime",
    },
    {
      title: "Điểm danh",
      dataIndex: "Attendance",
      key: "attendance",
    },
    {
      title: "Không điểm danh",
      dataIndex: "AttendanceNone",
      key: "attendancenone",
    },
    {
      title: "Tổng giờ",
      dataIndex: "TotalHours",
      key: "totalhourss",
    },
    {
      title: "Giờ trực",
      dataIndex: "DutyTime",
      key: "dutytime",
    },
    {
      title: "Tổng giờ trực",
      dataIndex: "TotalDutyTime",
      key: "TotalDutyTime",
    },
  ];

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const expandedRowRender = () => {
    const { Option } = Select;
    return (
      <>
        <div className="feedback-detail-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          explicabo laboriosam. Molestias harum reiciendis quam suscipit
          accusamus id voluptatem doloribus. Consectetur natus voluptatibus et
          atque quibusdam vero iure reiciendis ratione?
        </div>
      </>
    );
  };

  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Giờ dạy của giáo viên theo trung tâm"
        Extra={
          <div className="extra-table">
            <SortBox />
            <SearchBox />

            <button
              className="btn btn-secondary light btn-filter"
              onClick={funcShowFilter}
            >
              <Filter />
            </button>
          </div>
        }
      >
        <FilterTable showFilter={showFilter} />
      </PowerTable>
    </>
  );
};

export default TeachHoursCenter;

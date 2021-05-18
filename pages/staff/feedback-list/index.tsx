import React, { useState } from "react";
import { Table, Card, Tag, Select, Modal } from "antd";
import { FormOutlined, EyeOutlined } from "@ant-design/icons";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import ExpandTable from "~/components/ExpandTable";
import FilterBox from "~/components/Elements/FilterBox";
import { Filter, Eye, CheckCircle } from "react-feather";
import { Tooltip } from "antd";
import FilterTable from "~/components/Global/FeedbackList/FitlerTable";

const FeedbackList = () => {
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
      Type: "Hỗ trợ học viên",
      Title: "Xin nghỉ một sồ buổi học",
      SendPeople: "Lan Anh",
      Tvv: "Hải Tú",
      SendDay: "02/03/2021",
      Done: "",
      Remark: "",
      Action: "",
    },
  ];

  const columns = [
    {
      title: "Loại phản hồi",
      dataIndex: "Type",
      key: "type",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "title",
    },
    {
      title: "Người gửi",
      dataIndex: "SendPeople",
      key: "sendpeople",
    },
    {
      title: "Tư vấn viên",
      dataIndex: "Tvv",
      key: "tvv",
    },

    {
      title: "Ngày gửi",
      dataIndex: "StartDay",
      key: "status",
    },
    {
      title: "Xong",
      dataIndex: "Done",
      key: "done",
      render: (Status) => <Tag color="green">Xong</Tag>,
    },
    {
      title: "Đánh giá",
      dataIndex: "Remark",
      key: "remark",
    },
    {
      title: "Thao tác",
      dataIndex: "Action",
      key: "action",
      render: (Action) => (
        <div>
          <Tooltip title="Xử lý xong">
            <a className="btn btn-icon" onClick={showModal}>
              <CheckCircle />
            </a>
          </Tooltip>
          <Tooltip title="Xem chi tiết">
            <Link
              href={{
                pathname: "/staff/saler-list/detail/[slug]",
                query: { slug: 2 },
              }}
            >
              <a className="btn btn-icon">
                <Eye />
              </a>
            </Link>
          </Tooltip>
        </div>
      ),
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
          Dương Lan Anh Advance1412. Buổi nghỉ: tối 02/03/2021 (writìng) và
          03/03/2021(speaking) Lý do: Em đang ở vùng dịch ạ (thị xã Kinh Môn,
          huyện Kinh Môn, tỉnh Hải Dương)
        </div>
      </>
    );
  };

  return (
    <>
      <Modal
        title="Xác nhận thông tin"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn chắc chắn đã xử lí xong phản hồi</p>
      </Modal>
      <ExpandTable
        columns={columns}
        dataSource={dataSource}
        TitleCard="Feedback List"
        Extra={
          <div className="extra-table">
            <SearchBox />
            <button
              className="btn btn-secondary light btn-filter"
              onClick={funcShowFilter}
            >
              <Filter />
            </button>
          </div>
        }
        expandable={{ expandedRowRender }}
      >
        <FilterTable showFilter={showFilter} />
      </ExpandTable>
    </>
  );
};

export default FeedbackList;

import React, { useState } from "react";
import { Input, Modal } from "antd";

import SearchBox from "~/components/Elements/SearchBox";
import Link from "next/link";
import PowerTable from "~/components/PowerTable";
import SortBox from "~/components/Elements/SortBox";
import { Filter } from "react-feather";
import FilterTable from "~/components/Global/CostList";

const { TextArea } = Input;
const dataSource = [
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
  {
    key: "1",
    FullName: "Nguyễn Phi Hùng",
    SaleCamp: "Giai đoạn 1 - 7/2019",
    Money: "2,200,000",
    MoneyBonus: "",
    Total: "2,200,000",
    Note: "",
    Action: "",
  },
];

const columns = [
  {
    title: "Họ và tên",
    dataIndex: "FullName",
    key: "fullname",
  },
  {
    title: "Chiến dịch sale",
    dataIndex: "SaleCamp",
    key: "salecamp",
  },
  {
    title: "Số tiền",
    dataIndex: "Money",
    key: "money",
  },
  {
    title: "Thưởng",
    dataIndex: "MoneyBonus",
    key: "moneybonus",
    render: () => <Input style={{ width: 150 }} placeholder="2,500,000" />,
  },
  {
    title: "Tổng",
    dataIndex: "Total",
    key: "total",
  },
  {
    title: "Ghi chú",
    dataIndex: "Note",
    key: "note",
    render: () => <TextArea rows={3} />,
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    render: () => <AcceptPay />,
  },
];

const AcceptPay = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={showModal}>
        Thanh toán
      </button>
      <Modal
        title="Xác nhận"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h6 style={{ color: "#e17d00" }}>Xác nhận bảng lương?</h6>
      </Modal>
    </>
  );
};

const SalaryReview = () => {
  const [showFilter, showFilterSet] = useState(false);
  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  return (
    <>
      <PowerTable
        columns={columns}
        dataSource={dataSource}
        TitlePage="Duyệt lương Saler"
        TitleCard=""
        Extra={
          <div className="extra-table">
            <SortBox />
            <SearchBox />
          </div>
        }
      ></PowerTable>
    </>
  );
};

export default SalaryReview;

import React, { useState } from "react";
import { Select, DatePicker, Form, Modal } from "antd";
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
import FilterTable from "~/components/Global/CampaignRevenue/FilterTable";
import RevenueChart from "~/components/Dashboard/RevenueChart";

const expandedRowRender = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <div className="revenue-detail-row">
        <Form layout="vertical">
          <div className="row">
            <div className="col-md-3">
              <Form.Item>
                <DatePicker
                  placeholder="Từ ngày"
                  className="style-input w-100"
                  onChange={onChange}
                />
              </Form.Item>
            </div>

            <div className="col-md-3">
              <Form.Item>
                <DatePicker
                  placeholder="Đến ngày"
                  className="style-input w-100"
                  onChange={onChange}
                />
              </Form.Item>
            </div>

            <div className="col-md-3">
              <Form.Item>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                >
                  Tìm kiếm
                </button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
      <div className="revenue-chart">
        <RevenueChart />
      </div>
    </>
  );
};

const CampRevenue = () => {
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
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "2",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "3",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "4",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "5",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "6",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "7",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "8",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "9",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "10",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "11",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
    {
      key: "12",
      FullName: "Jack",
      NumberPhone: "0129303021",
      TotalMoney: "5,800,929,000",
      TotalPill: "500",
      TotalCustomer: "743",
    },
  ];

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "FullName",
      key: "fullname",
    },
    {
      title: "Số diện thoại",
      dataIndex: "NumberPhone",
      key: "numberphone",
    },
    {
      title: "Tổng doanh thu",
      dataIndex: "TotalMoney",
      key: "totalmoney",
    },
    {
      title: "Số hóa đơn",
      dataIndex: "TotalPill",
      key: "totalpill",
    },

    {
      title: "Số khách hàng",
      dataIndex: "TotalCustomer",
      key: "totalcustomer",
    },
  ];

  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        TitlePage="THÔNG TIN SALER, DOANH THU THEO CHIẾN DỊCH
        "
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

export default CampRevenue;

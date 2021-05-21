import React from "react";
import { Button, Collapse, Divider, Tag } from "antd";
import PowerTable from "~/components/PowerTable";
import { dataService } from "../../../../lib/customer/dataCustomer";
import ExpandTable from "~/components/ExpandTable";
import { File } from "react-feather";

const InfoPaymentCard = () => {
  const columns = [
    { title: "Ngày tạo", dataIndex: "regDate" },
    { title: "Số tiền", dataIndex: "cost" },
    { title: "Ghi chú", dataIndex: "service" },
    { render: () => <Button type="link" icon={<File />} /> },
  ];

  return (
    <div className="container-fluid">
      <div className="pt-3">
        <h5>Học phí còn nợ: 00</h5>
      </div>
      <PowerTable
        dataSource={dataService}
        columns={columns}
        TitleCard="Lịch sử thanh toán"
      />

      <PowerTable
        dataSource={""}
        columns={columns}
        TitleCard="Lịch sử hoàn tiền"
      />
    </div>
  );
};
export default InfoPaymentCard;

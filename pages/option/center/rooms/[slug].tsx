import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../../../../lib/option/dataOption";

import { Tag, Button, Tooltip } from "antd";
import RoomForm from "~/components/Global/Option/RoomForm";
import { Info, RotateCcw } from "react-feather";
const Center = () => {
  const [roomForm, setRoomForm] = useState(false);
  const columns = [
    { title: "Phòng", dataIndex: "room" },
    { title: "Lầu", dataIndex: "floor" },
    { title: "Người cập nhật", dataIndex: "rpCreator" },
    { title: "Ngày cập nhật", dataIndex: "regDate" },
    {
      render: () => (
        <>
          <Tooltip title="Cập nhật phòng">
            <button
              className="btn btn-icon edit"
              onClick={() => setRoomForm(true)}
            >
              <RotateCcw />
            </button>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Danh sách phòng" />
      </div>
      <div className="col-12">
        <PowerTable
          TitleCard={
            <button
              onClick={() => setRoomForm(true)}
              className="btn btn-warning add-new"
            >
              Thêm mới
            </button>
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
      <RoomForm visible={roomForm} onCancel={() => setRoomForm(false)} />
    </div>
  );
};

export default Center;

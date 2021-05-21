import React, { useState } from "react";
import { Card } from "antd";
import WrapFilter from "~/components/Global/ScheduleRoom/WrapFilter";

const ScheduleRoom = () => {
  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Kiểm tra phòng">
          <WrapFilter />
        </Card>
      </div>
    </div>
  );
};

export default ScheduleRoom;

import WrapFilter from "~/components/Global/CheckRoom/WrapFilter";
import React, { useState } from "react";
import { Card } from "antd";

const CheckRoom = () => {
  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };
  return (
    <div className="row">
      <div className="col-12">
        <Card title="Xem lịch giáo viên">
          <WrapFilter showFilter={showFilter} />
        </Card>
      </div>
    </div>
  );
};

export default CheckRoom;

import WrapFilter from "~/components/Global/CalendarEmptyTeacher/WrapFilter";
import React, { useState } from "react";
import { Card } from "antd";

const CalendarEmptyTeacher = () => {
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

export default CalendarEmptyTeacher;

import WrapFilter from "~/components/Global/CalendarEmptyTeacher/WrapFilter";
import React, { useState } from "react";
import { Card } from "antd";
import { useAuth } from "~/context/auth";
const CalendarEmptyTeacher = () => {
  const { getTitlePage } = useAuth();
  getTitlePage("Xem lịch giáo viên");

  const [showFilter, showFilterSet] = useState(false);

  const funcShowFilter = () => {
    showFilter ? showFilterSet(false) : showFilterSet(true);
  };
  return (
    <div className="row">
      <div className="col-12">
        <Card>
          <WrapFilter showFilter={showFilter} />
        </Card>
      </div>
    </div>
  );
};

export default CalendarEmptyTeacher;

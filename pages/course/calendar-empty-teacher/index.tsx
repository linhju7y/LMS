import WrapFilter from "~/components/Global/CalendarEmptyTeacher/WrapFilter";
import React, { useState } from "react";
import { Card } from "antd";
import { useWrap } from "~/wrapper/wrap";
const CalendarEmptyTeacher = () => {
  const { getTitlePage } = useWrap();
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

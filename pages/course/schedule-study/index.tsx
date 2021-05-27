import React from "react";
import { Card } from "antd";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../../../lib/create-course/events";
import CheckOneStudyTime from "~/components/Global/ScheduleStudy/CheckOneStudyTime";
import CheckManyStudyTime from "~/components/Global/ScheduleStudy/CheckManyStudyTime";
import CheckRoom from "~/components/Global/ScheduleStudy/CheckRoom";
import CalendarManyTeacher from "~/components/Global/ScheduleStudy/CalendarManyTeacher";
import CheckEmptyTeacher from "~/components/Global/ScheduleStudy/CheckEmptyTeacher";
import { useAuth } from "~/context/auth";

const localizer = momentLocalizer(moment);

const ScheduleStudy = () => {
  const { getTitlePage } = useAuth();

  getTitlePage("Kiểm tra lịch học");
  return (
    <div className="row">
      <div className="col-12">
        <Card
          extra={
            <div className="card-list-btn">
              <CheckOneStudyTime />
              <CheckManyStudyTime />
              <CheckRoom />
              <CalendarManyTeacher />
              <CheckEmptyTeacher />
            </div>
          }
        >
          <div className="wrap-calendar">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ScheduleStudy;
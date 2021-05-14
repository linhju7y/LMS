import React, { Component, ComponentType } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TitlePage from "~/components/TitlePage";
import { Card } from "antd";
const localizer = momentLocalizer(moment);

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

const CreateCourse = (props: { props: any }) => {
  return (
    <div>
      <TitlePage title="Tạo khóa học" />

      <Card
        title="Xếp lịch học"
        extra={
          <div className="btn-page">
            <button type="button" className="btn btn-primary">
              Thông tin lịch học
            </button>
          </div>
        }
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Card>
    </div>
  );
};
export default CreateCourse;

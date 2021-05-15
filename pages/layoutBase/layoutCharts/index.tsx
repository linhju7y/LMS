import React from "react";
import { Card } from "antd";
import LineChart from "~/components/Chart/LineChart";
import Doughnut from "~/components/Chart/Doughnut";
import ColumnChartMix from "~/components/Chart/ColumnChartMix";
import BarChart from "~/components/Chart/BarChart";
import GroupedBar from "~/components/Chart/GroupBarChart";
import CrazyChart from "~/components/Chart/CrazyChart";
import MultiAxisLine from "~/components/Chart/MultiAxisLine";

const testDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-6">
          <ColumnChartMix />
        </div> */}
        <div className="col-6">
          <Card>
            <GroupedBar />
          </Card>
        </div>
        <div className="col-6">
          <Card>
            <CrazyChart />
          </Card>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-6">
          <Card>
            <MultiAxisLine />
          </Card>
        </div>
        <div className="col-6">
          <Card>
            <Doughnut />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default testDashboard;
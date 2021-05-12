import React from "react";
import ChartCard from "~/components/Dashboard/ChartCard";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "antd";
import { increamentData, lineData } from "./data";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChartCard
            prize="$9,626"
            percent="23"
            styleName="down"
            title="Bitcoin Price"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#FE9E15"
                        stopOpacity={0.9}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#4D95F3"
                    fill="url(#color3)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
          />
        </div>
        <div className="col-2">
          <ChartCard
            title="Etherium Price"
            prize="$7,831"
            percent="07"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#06BB8A"
                        stopOpacity={0.9}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    type="monotone"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#4D95F3"
                    fill="url(#color4)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="up"
          />
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
        <div className="col-2">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

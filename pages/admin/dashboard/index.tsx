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
import { increamentData, lineData } from "./data";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <ChartCard
            prize="$9,626"
            title="23"
            icon="bitcoin"
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
            styleName="down"
            desc="Bitcoin Price"
          />
        </div>
        <div className="col-3">
          <ChartCard
            prize="$7,831"
            title="07"
            icon="etherium"
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
            desc="Etherium Price"
          />
        </div>
        <div className="col-3">
          <ChartCard
            prize="$1,239"
            title="08"
            icon="ripple"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#FEEADA"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#FEEADA"
                    fill="url(#color5)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="down"
            desc="Ripple Price"
          />
        </div>
        <div className="col-3">
          <ChartCard
            prize="$849"
            title="47"
            icon="litcoin"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <LineChart
                  data={lineData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <Tooltip />
                  <Line
                    dataKey="price"
                    stroke="#038FDE"
                    dot={{ stroke: "#FEA931", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            }
            styleName="down"
            desc="Litecoin Price"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

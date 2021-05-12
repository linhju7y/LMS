import React from "react";

import Widget from "./Widget";

const ChartCard = ({ prize, title, children, styleName, percent }) => {
  return (
    <Widget styleName="gx-card-full">
      <div className="row">
        <div className="col-12">
          <h5>{title}</h5>
        </div>
      </div>
      <div className="row d-flex align justify-content-center align-items-center ">
        <div className="col-6">
          <h4>{prize}</h4>
        </div>
        <div className="col-6 d-flex ">
          <b>
            <span
              className={`gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${styleName}`}
            >
              {percent}% <i className={`fas fa-angle-${styleName}`}></i>
            </span>
          </b>
        </div>
      </div>
      {children}
    </Widget>
  );
};

export default ChartCard;

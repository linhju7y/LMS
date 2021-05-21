import React, { useState } from "react";
import { Card, Slider, Switch, Pagination } from "antd";

import { SoundOutlined } from "@ant-design/icons";

import { Volume2 } from "react-feather";

const ListeningTest = () => {
  const [state, setState] = useState({ disabled: false });

  const { disabled } = state;

  return (
    <div className="test-wrapper">
      <Card
        className="test-card"
        title="Listening"
        extra={
          <div className="extra-table">
            <Volume2 />

            <Slider
              defaultValue={100}
              disabled={disabled}
              className="sound-edit"
            />
          </div>
        }
      >
        <div className="test-body">Doing...</div>
        <div className="test-footer">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </Card>
    </div>
  );
};

export default ListeningTest;

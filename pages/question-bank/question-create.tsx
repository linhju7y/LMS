import React from "react";

import { Tabs, Card } from "antd";
import TitlePage from "~/components/Elements/TitlePage";

const { TabPane } = Tabs;

const QuestionCreate = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="quesntion-create">
      <TitlePage title="Tạo câu hỏi" />
      <Card title="Danh sách câu hỏi và trả lời">
        <Card title="Item question">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="  Câu hỏi & Trả lời" key="1"></TabPane>
            <TabPane tab="Thông tin chung" key="2"></TabPane>
          </Tabs>
        </Card>
      </Card>
    </div>
  );
};

export default QuestionCreate;

import React, { useState } from "react";

import { Popover, Card, Divider, Drawer, Form, Select, Input } from "antd";
import TitlePage from "~/components/Elements/TitlePage";
import { Info, Bookmark } from "react-feather";
import CreateQuestionForm from "~/components/Global/QuestionBank/CreateQuestionForm";

const content = (
  <div className="question-bank-info">
    <ul className="list">
      <li className="list-item">
        <span className="list-title">Môn học:</span>
        <span className="list-text">English</span>
      </li>
      <li className="list-item">
        <span className="list-title">Loại môn học:</span>
        <span className="list-text">Phát âm</span>
      </li>
      <li className="list-item">
        <span className="list-title">Loại câu hỏi:</span>
        <span className="list-text">Câu hỏi nhóm</span>
      </li>
      <li className="list-item">
        <span className="list-title">Mức độ:</span>
        <span className="list-text">Rất khó</span>
      </li>
      <li className="list-item mb-0">
        <span className="list-title">Học kỳ:</span>
        <span className="list-text">học kỳ II</span>
      </li>
      <li className="list-item mb-0">
        <span className="list-title">File:</span>
        <span className="list-text">không có</span>
      </li>
    </ul>
  </div>
);

const dataQuestion = [
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
  {
    TypeQues: "",
    TextQues:
      "Jack's father is a farmer, he 55 years old and he work in ... company",
    AnswerList: [
      {
        TextAns: "Đáp án",
        Correct: true,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
      {
        TextAns: "Đáp án",
        Correct: false,
      },
    ],
  },
];

const QuestionCreate = () => {
  return (
    <div className="question-create">
      <TitlePage title="Tạo câu hỏi" />

      <div className="row">
        <div className="col-md-9 col-12">
          <Card
            title={
              <div className="title-question-bank">
                <h3 className="title-big">
                  <Bookmark /> Danh sách câu hỏi
                </h3>
                {/* <ul className="list-detail-question">
                  <li>
                    <Popover
                      content={content}
                      trigger="hover"
                      placement="rightBottom"
                    >
                      <span className="icon-detail-question">
                        <Info />
                      </span>
                    </Popover>
                  </li>
                  <li>
                    <span className="title">Môn học:</span>
                    <span className="text">English</span>
                  </li>
                  <li>
                    <span className="title">Mức độ:</span>
                    <span className="text">Trung bình</span>
                  </li>
                </ul> */}
              </div>
            }
            extra={<CreateQuestionForm />}
          >
            <div className="question-list">
              {dataQuestion?.map((item, index) => (
                <div className="question-item">
                  <div className="box-title">
                    <span className="title-ques">
                      {"Câu hỏi " + (index + 1)}
                    </span>
                    <p className="title-text">{item.TextQues}</p>
                  </div>
                  <div className="box-answer">
                    <ul className="list-answer">
                      {item.AnswerList?.map((ans, ind) => (
                        <li>
                          <span className="tick">
                            {ind == 0
                              ? "A"
                              : ind == 1
                              ? "B"
                              : ind == 2
                              ? "C"
                              : ind == 3
                              ? "D"
                              : ""}
                          </span>
                          <span className="ans">{ans.TextAns + " " + ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuestionCreate;

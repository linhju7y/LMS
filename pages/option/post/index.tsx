import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import SearchBox from "~/components/Elements/SearchBox";
import { data } from "../dataOption2";
import PostForm from "~/components/Global/Option/PostForm";
import ExpandTable from "~/components/ExpandTable";
import { Switch, Tag, Card } from "antd";
import SortBox from "~/components/Elements/SortBox";

const Post = () => {
  const expandedRowRender = () => {
    return (
      <div className="feedback-detail-text">
        <>
          <Card>
            Thư giới thiệu là một phần quan trọng trong yêu cầu tuyển sinh của
            nhiều trường đại học trên thế giới, cho dù bạn đi học đại học hay
            thạc sĩ. Song song với bài luận cá nhân, thư giới thiệu góp phần
            cung cấp cái nhìn toàn diện về năng lực và tiềm năng của chúng ta.
            Và tất nhiên để cạnh tranh được với những thí sinh khác, chúng ta
            cần khác biệt, nổi trội so với phần đông. Anh đã từng viết rất nhiều
            thư giới thiệu cho học sinh, kể cả học sinh cấp 3, đại học hay thậm
            chí là người đi làm. Anh hiểu được cách các bạn đang hiểu nhầm mục
            đích của thư giới thiệu và phản ánh sự hiểu nhầm đó vào nội dung của
            thư. Anh cũng hiểu một thư giới thiệu xuất sắc cần phải đảm bảo
            những yếu tố như thế nào. Nên hôm nay anh sẽ đưa ra 3 tiêu chí giúp
            mọi người lên ý tưởng cho một (hoặc) nhiều bức thư giới thiệu mà
            thực sự sẽ để lại ấn tượng cho người đọc nhé.
          </Card>
        </>
      </div>
    );
  };

  const columns = [
    {
      title: "Image",
      render: () => <img src="" alt="Image" />,
    },
    { title: "Title", dataIndex: "title" },
    {
      title: "Status",
      dataIndex: "postStatus",
      render: (postStatus) => {
        let color = postStatus % 2 == 0 ? "#70e000" : "#837569";
        let status = postStatus % 2 == 0 ? "Active" : "Inactive";
        return (
          <Tag color={color} className="style-tag">
            {status}
          </Tag>
        );
      },
    },
    { title: "Create date", dataIndex: "expires" },
    { title: "Create by", dataIndex: "modBy" },
    {
      title: "Staff",
      render: () => (
        <>
          <Switch /> Show
        </>
      ),
    },
    {
      title: "Student",
      render: () => (
        <>
          <Switch /> Show
        </>
      ),
    },
    {
      render: () => (
        <>
          <PostForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Staff Salary" />
      </div>
      <div className="col-12">
        <ExpandTable
          expandable={{ expandedRowRender }}
          TitleCard={<PostForm showAdd={true} />}
          dataSource={data}
          columns={columns}
          Extra={
            <div className="extra-table">
              <SearchBox />
              <SortBox />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Post;

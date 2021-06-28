import React, { useEffect, useState } from "react";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import { data } from "../../../lib/option/dataOption2";
import PostForm from "~/components/Global/Option/PostForm";
import ExpandTable from "~/components/ExpandTable";
import { Switch, Card } from "antd";
import LayoutBase from "~/components/LayoutBase";
import { postContentApi } from "~/apiBase";
import { useWrap } from "~/context/wrap";
const Post = () => {
  const { showNoti } = useWrap();
  const [isLoading, setIsLoading] = useState({
    type: "",
    status: false,
  });
  const [dataPostContent, setDataPostContent] = useState<IPostContent[]>();
  const [rowData, setRowData] = useState<IPostContent[]>();

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

  const getDataPostContent = () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });
    (async () => {
      try {
        let res = await postContentApi.getAll();
        res.status == 200 && setDataPostContent(res.data.createAcc);
      } catch (error) {
        showNoti("danger", error.message);
      } finally {
        setIsLoading({
          type: "GET_ALL",
          status: false,
        });
      }
    })();
  };

  const getDataPostContentWithID = (ServiceID: number) => {
    setIsLoading({
      type: "GET_WITH_ID",
      status: true,
    });
    (async () => {
      try {
        let res = await postContentApi.getWitdhID(ServiceID);
        res.status == 200 && setRowData(res.data.createAcc); 
      } catch (error) {
        showNoti("danger", error.message);
      } finally {
        setIsLoading({
          type: "GET_WITH_ID",
          status: false,
        });
      }
    })();
  };

  // ADD DATA
  const _onSubmit = async (data: any) => {
    let res = null;
    setIsLoading({
      type: "ADD_DATA",
      status: true,
    });

    if(data.ID) {
      console.log(data);
      try {
        res = await postContentApi.put(data);
        res?.status == 200 && afterPost("Sửa");
      } catch (error) {
        showNoti("danger", error.message);
      } finally {
        setIsLoading({
          type: "ADD_DATA",
          status: false,
        });
      }
    } else {
      try {
        res = await postContentApi.post(data);
        res?.status == 200 && afterPost("Thêm");
      } catch (error) {
        showNoti("danger", error.message);
      } finally {
        setIsLoading({
          type: "ADD_DATA",
          status: false,
        });
      }
    }

  }

  const columns = [
    {
      title: "Image",
      render: () => <img src="PostIMG" alt="Image" />,
    },
    { title: "Title", dataIndex: "TitlePost", ...FilterColumn("title") },
    {
      title: "Status",
      dataIndex: "Status",
      align: "center",
      render: (postStatus) => {
        let status = postStatus % 2 == 0 ? "Active" : "Inactive";
        return (
          <>
            {status == "Active" ? (
              <span className="tag green">{status}</span>
            ) : (
              <span className="tag gray">{status}</span>
            )}
          </>
        );
      },
      filters: [
        {
          text: "Active",
          value: "Active",
        },
        {
          text: "Inactive",
          value: "Inactive",
        },
      ],
      onFilter: (value, record) => record.postStatus.indexOf(value) === 0,
    },
    {
      title: "Create date",
      dataIndex: "CreatedOn",
      ...FilterDateColumn("CreatedOn"),
    },
    { title: "Create by", dataIndex: "ModifiedBy", ...FilterColumn("ModifiedBy") },
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
      render: (record) => (
        <>
          <PostForm 
            PostContentID={record.ID}
            getDataServiceWithID={(PostContentID: number) => {
              getDataPostContentWithID(PostContentID)
            }}
            rowData={rowData}
            isLoading={isLoading}
            showIcon={true} 
            _onSubmit={(data: any) => _onSubmit(data)} 
          />
        </>
      ),
    },
  ];

  const afterPost = (value) => {
    showNoti("success", `${value} thành công`);
    getDataPostContent();
    // addDataSuccess(), setIsModalVisible(false);
  };

  useEffect(() => {
    getDataPostContent();
  }, [])

  return (
    <ExpandTable
      isLoading={isLoading}
      addClass="basic-header"
      TitlePage="Post List"
      expandable={{ expandedRowRender }}
      TitleCard={
        <PostForm 
          showAdd={true}
          addDataSuccess={() => getDataPostContent()}
          isLoading={isLoading}
          _onSubmit={(data: any) => _onSubmit(data)} 
        />}
      dataSource={dataPostContent}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox />
        </div>
      }
    />
  );
};
Post.layout = LayoutBase;
export default Post;

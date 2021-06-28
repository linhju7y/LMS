import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Tooltip,
  Select,
  Switch,
  Upload,
  message,
  Skeleton
} from "antd";
import { RotateCcw, ArrowDownCircle } from "react-feather";
import { InboxOutlined } from "@ant-design/icons";
import TinyMCE from "~/components/TinyMCE";
import { useWrap } from "~/context/wrap";
import { useForm } from "react-hook-form";
const ExamForm = (props) => {
  const { Dragger } = Upload;
  const draggerProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const { showNoti } = useWrap();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm<IPostContent>();

  const onSubmit = handleSubmit((data: any) => {
    let res = props._onSubmit(data);

    res.then(function (rs: any) {
      console.log("Res in form: ", rs);
      rs
        ? res.status == 200 && setIsModalVisible(false)
        : showNoti("danger", "Server lỗi")
    });
  });

  useEffect(() => {
    if(props.rowData) {
      setValue("ID", props.rowData.ID);
      setValue("PostIMG", props.rowData.PostIMG);
      setValue("TitlePost", props.rowData.TitlePost);
      setValue("ContentPost", props.rowData.ContentPost);
      setValue("Enable", props.rowData.Enable);
    }
  }, [props.rowData])

  return (
    <>
      {props.showIcon && (
        <>
          <Tooltip title="Cập nhật">
            <button
              className="btn btn-icon edit"
              onClick={() => {
                setIsModalVisible(true), props.getDataServiceWithID(props.PostContentID);
              }}
            >
              <RotateCcw />
            </button>
          </Tooltip>
        </>
      )}
      {props.showAdd && (
        <button
          className="btn btn-warning add-new"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Thêm mới
        </button>
      )}

      {/*  */}
      <Modal
        width={800}
        title={<>{props.showAdd ? "New Post" : "Update Post"}</>}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical" onFinish={onSubmit}>
            {/*  */}
            <div className="row">
              <Form.Item label="Title">
                {props.isLoading.type == "GET_WITH_ID" &&
                  props.isLoading.status ? (
                    <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                    title={{ width: "100%" }}
                  />
                  ) : (
                    <Input 
                      placeholder="..." 
                      className="style-input"
                      defaultValue={props.rowData?.TitlePost}
                      onChange={(e) => setValue("TitlePost", e.target.value)} 
                      />
                  )}
                
              </Form.Item>
            </div>
            {/*  */}
            <div className="row">
              <Form.Item label="Banner">
                <Dragger {...draggerProps}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </Dragger>
              </Form.Item>
            </div>
            {/*  */}
            <div className="row">
              <Form.Item label="Content">
                <TinyMCE />
              </Form.Item>
            </div>
            {/*  */}
            <div className="row ">
              <div className="col-12">
                {props.showAdd == true ? (
                  <Button className="w-100" type="primary" size="large" onClick={onSubmit}>
                    Create
                  </Button>
                ) : (
                  <Button className="w-100" type="primary" size="large" onClick={onSubmit}>
                    Update
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ExamForm;

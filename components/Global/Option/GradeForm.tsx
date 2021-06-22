import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Spin, Tooltip, Skeleton } from "antd";
import { RotateCcw } from "react-feather";
import { useForm } from "react-hook-form";
import { courseApi } from "~/apiBase";
import { useWrap } from "~/context/wrap";

const GradeForm = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = React.useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm<ICourse>();
  const { showNoti } = useWrap();

  const onSubmit = handleSubmit((data: any) => {
    let res = props._onSubmit(data);

    res.then(function (rs: any) {
      console.log("Res in form: ", rs);
      res.status == 200 && setIsModalVisible(false);
    });
  });

  useEffect(() => {
    if (props.rowData) {
      setValue("ListCourseID", props.rowData.ListCourseID);
    }
  }, [props.rowData]);

  return (
    <>
      {props.showIcon && (
        <button
          className="btn btn-icon edit"
          onClick={() => {
            setIsModalVisible(true), props.getDataCourseWithID(props.CourseID);
          }}
        >
          <Tooltip title="Cập nhật">
            <RotateCcw />
          </Tooltip>
        </button>
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
        title="Tạo khối học"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical" onFinish={onSubmit}>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Code khóa">
                  {props.isLoading.type == "GET_WITH_ID" &&
                  props.isLoading.status ? (
                    <Skeleton
                      active
                      paragraph={{ rows: 0 }}
                      title={{ width: "100%" }}
                    />
                  ) : (
                    <Input
                      {...register("ListCourseCode")}
                      placeholder=""
                      className="style-input"
                      value={props.rowData?.ListCourseCode}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Tên khóa">
                  {props.isLoading.type == "GET_WITH_ID" &&
                  props.isLoading.status ? (
                    <Skeleton
                      active
                      paragraph={{ rows: 0 }}
                      title={{ width: "100%" }}
                    />
                  ) : (
                    <Input
                      {...register("ListCourseName")}
                      placeholder=""
                      className="style-input"
                      value={props.rowData?.ListCourseName}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Mô Tả">
                  {props.isLoading.type == "GET_WITH_ID" &&
                  props.isLoading.status ? (
                    <Skeleton
                      active
                      paragraph={{ rows: 0 }}
                      title={{ width: "100%" }}
                    />
                  ) : (
                    <Input
                      {...register("Description")}
                      placeholder=""
                      className="style-input"
                      value={props.rowData?.Description}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <Form.Item>
                  <Radio.Group
                    onChange={onChange_Status("Enable")}
                    value={status}
                  >
                    <Radio value={1}>Hiện</Radio>
                    <Radio value={2}>Ẩn</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div> */}
            <div className="row ">
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Lưu
                  {props.isLoading.type == "ADD_DATA" &&
                    props.isLoading.status && <Spin className="loading-base" />}
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default GradeForm;

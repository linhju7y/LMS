import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip, Select, Skeleton } from "antd";
import { RotateCcw } from "react-feather";
import { useForm } from "react-hook-form";
import { useWrap } from "~/context/wrap";
const SupplierForm = (props) => {
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { showNoti } = useWrap();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm();

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
      Object.keys(props.rowData).forEach(function (key) {
        setValue(key, props.rowData[key]);
      });
    }
  }, [props.rowData])

  return (
    <>
      {props.showIcon && (
        <button
          className="btn btn-icon edit"
          onClick={() => {
            setIsModalVisible(true), props.getDataServiceWithID(props.SupplierID);
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
        title={<>{props.showAdd ? "Create Supplier" : "Update Supplier"}</>}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical" onFinish={onSubmit}>
            {/*  */}
            <div className="row">
              <div className="col-12">
                <Form.Item label="Supplier Name">
                  {props.isLoading.type == "GET_WITH_ID" &&
                  props.isLoading.status ? (
                    <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                    title={{ width: "100%" }}
                  />
                  ) : (
                    <Input 
                      {...register("SupplierName")}
                      placeholder=""
                      className="style-input"
                      defaultValue={props.rowData?.SupplierName}
                      onChange={(e) => setValue("SupplierName", e.target.value)}
                      />
                  )}
                  
                </Form.Item>
              </div>
            </div>
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

export default SupplierForm;

import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip, Select } from "antd";
import { RotateCcw } from "react-feather";
import { useForm } from "react-hook-form";

const { Option } = Select;

const StaffSalaryForm = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = React.useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm<ISalary>();
  // const { showNoti } = useWrap();

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
    // let res = props._onSubmit(data);

    // res.then(function (rs: any) {
    //   console.log("Res in form: ", rs);
    //   res.status == 200 && setIsModalVisible(false);
    // });
  });

  // useEffect(() => {

  // }, [])


  return (
    <>
      {props.showIcon && (
        <Tooltip title="Cập nhật">
          <button
            className="btn btn-icon edit"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            <RotateCcw />
          </button>
        </Tooltip>
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
        title={
          <>{props.showAdd ? "Create Staff Salary" : "Update Staff Salary"}</>
        }
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical" onFinish={onSubmit}>
            {/*  */}
            <div className="row">
              <div className="col-12">
                <Form.Item label="Full Name">
                  <Input
                    {...register("UserInformationID")} 
                    className="style-input"
                    value={"test"}  
                    />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col-12">
                <Form.Item label="Salary">
                  <Input
                    {...register("SalaryMonth")} 
                    className="style-input"
                    />
                </Form.Item>
              </div>
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

export default StaffSalaryForm;

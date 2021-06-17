import React, { FC, useEffect } from "react";
import { Modal, Form, Input, Button, message, Spin } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { branchApi } from "~/pages/api";

type CenterFormProps = IFormBaseProps & {
  Id?: number;
};

export const CenterForm: FC<CenterFormProps> = ({ visible, onCancel, Id }) => {
  const methods = useForm<IBranch>();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitted },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      await branchApi.post(data);
      message.success("Thêm trung tâm thành công!");
      reset();
    } catch (err) {
      console.log(err);
      message.error("Thêm trung tâm thất bại!");
    }
  };

  return (
    <Modal
      title="Tạo trung tâm"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <FormProvider {...methods}>
        <div className="container-fluid">
          <Form layout="vertical">
            <div className="row">
              <div className="col-12">
                <Form.Item label="Mã trung tâm">
                  <Input
                    {...register("BranchCode")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Tên trung tâm">
                  <Input
                    {...register("BranchName")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Số điện thoại">
                  <Input
                    {...register("Phone")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Địa chỉ">
                  <Input
                    {...register("Address")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="col-12">
              <Button
                className="w-100"
                type="primary"
                size="large"
                onClick={handleSubmit(onSubmit)}
              >
                LƯU
              </Button>
            </div>
          </Form>
        </div>
      </FormProvider>
    </Modal>
  );
};

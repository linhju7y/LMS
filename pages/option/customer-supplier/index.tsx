import React, { useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption2";
import CustomerSupplierForm from "~/components/Global/Option/CustomerSupplierForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import LayoutBase from "~/components/LayoutBase";
import { customerSupplierApi } from "~/apiBase";
import { Tooltip, Switch } from "antd";
import { useWrap } from "~/context/wrap";
import DecideModal from "~/components/Elements/DecideModal";
const CustomerSupplier = () => {
  const [dataCustomerSupplier, setDataCustomerSupplier] = useState<ICustomerSupplier[]>([]);
  const { showNoti } = useWrap();
  const [isLoading, setIsLoading] = useState({
    type: "",
    status: false,
  });
  const [isOpen, setIsOpen] = useState({
    isOpen: false,
    status: null,
  });
  const [dataHidden, setDataHidden] = useState({
    ListCourseId: null,
    Enable: null,
  });
  const [rowData, setRowData] = useState<ICustomerSupplier[]>();

  const getDataCutomerSupplier = () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });
    (async () => {
      try {
        let res = await customerSupplierApi.getAll();
        res.status == 200 && setDataCustomerSupplier(res.data.createAcc);
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

  const getDataCutomerSupplierWithID = (CustomerSupplierID: number) => {
    setIsLoading({
      type: "GET_WITH_ID",
      status: true,
    });
    (async () => {
      try {
        let res = await customerSupplierApi.getWitdhID(CustomerSupplierID);
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

  // ADD Data
  const _onSubmit = async (data: any) => {
    setIsLoading({
      type: "ADD_DATA",
      status: true,
    });

    let res = null;

    if(data.SourceInformationID) {
      console.log(data);
      try {
        res = await customerSupplierApi.put(data);
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
        res = await customerSupplierApi.post(data);
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

    return res;
  }

  // DELETE COURSE
  const changeStatus = (checked: boolean, idCourse: number) => {
    setDataHidden({
      ListCourseId: idCourse,
      Enable: checked,
    });

    !isOpen.isOpen && checked
      ? setIsOpen({ isOpen: true, status: "hide" })
      : setIsOpen({ isOpen: true, status: "show" });
  };

  const statusShow = async () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });
    try {
      let res = await customerSupplierApi.patch(dataHidden);
      res.status == 200 && getDataDiscount(),
        showNoti("success", res.data.message),
        isOpen.status == "hide"
          ? setIsOpen({ isOpen: false, status: "hide" })
          : setIsOpen({ isOpen: false, status: "show" });
    } catch (error) {
      showNoti("danger", error.Message);
    } finally {
      setIsLoading({
        type: "GET_ALL",
        status: false,
      });
    }
  };

  const afterPost = (value) => {
    showNoti("success", `${value} thành công`);
    getDataCutomerSupplier();
    // addDataSuccess(), setIsModalVisible(false);
  };

  useEffect(() => {
    getDataCutomerSupplier();
  }, [])


  const columns = [
    {
      title: "Customer Supplier",
      dataIndex: "SourceInformationName",
      ...FilterColumn("SourceInformationName"),
    },
    { title: "Modified By", dataIndex: "ModifiedBy", ...FilterColumn("ModifiedBy") },
    {
      title: "Modified Date",
      dataIndex: "ModifiedOn",
      ...FilterDateColumn("ModifiedOn"),
    },
    {
      title: "Hidden",
      dataIndex: "Enable",
      render: (Enable, record) => (
        <>
          <Switch
            checkedChildren="Show"
            unCheckedChildren="Hide"
            checked={Enable}
            size="default"
            onChange={(checked) => changeStatus(checked, record.SourceInformationID)}
          />
        </>
      ),
    },

    {
      render: (record) => (
        <>
          <CustomerSupplierForm 
            CustomerSupplierID={record.SourceInformationID}
            getDataCutomerSupplierWithID={(CustomerSupplierID: number) => {
              getDataCutomerSupplierWithID(CustomerSupplierID)
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

  return (
    <>
      <DecideModal
        content={`Bạn có chắc muốn ${
          isOpen.status == "hide" ? "hiện" : "ẩn"
        } không?`}
        addClass="color-red"
        isOpen={isOpen.isOpen}
        isCancel={() =>
          setIsOpen({
            ...isOpen,
            isOpen: false,
          })
        }
        isOk={() => statusShow()}
      />
      <PowerTable
        loading={isLoading}
        addClass="basic-header"
        TitlePage="CUSTOMER SUPPLIER LIST"
        TitleCard={
          <CustomerSupplierForm 
            showAdd={true} 
            addDataSuccess={() => getDataCutomerSupplier()}
            isLoading={isLoading}
            _onSubmit={(data: any) => _onSubmit(data)}
          />
        }
        dataSource={dataCustomerSupplier}
        columns={columns}
        Extra={
          <div className="extra-table">
            <FilterTable />
            <SortBox />
          </div>
        }
      />
    </>

  );
};
CustomerSupplier.layout = LayoutBase;
export default CustomerSupplier;

import React, { useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import { data } from "../../../lib/option/dataOption2";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import DiscountForm from "~/components/Global/Option/DiscountForm";
import SortBox from "~/components/Elements/SortBox";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import LayoutBase from "~/components/LayoutBase";
import { discountApi } from "~/apiBase";
import { Tooltip, Switch } from "antd";
import { useWrap } from "~/context/wrap";
import DecideModal from "~/components/Elements/DecideModal";
const Discount = () => {
  const [dataDiscount, setDataDiscount] = useState<IDiscount[]>([]);
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
  const [rowData, setRowData] = useState<IDiscount[]>();

  const getDataDiscount = () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });
    (async () => {
      try {
        let res = await discountApi.getAll();
        res.status == 200 && setDataDiscount(res.data.createAcc);
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

  const getDataDiscountWithID = (ServiceID: number) => {
    setIsLoading({
      type: "GET_WITH_ID",
      status: true,
    });
    (async () => {
      try {
        let res = await discountApi.getWitdhID(ServiceID);
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
      let res = await discountApi.patch(dataHidden);
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


  const columns = [
    {
      title: "Code",
      dataIndex: "VoucherCode",
      ...FilterColumn("VoucherCode"),
      render: (code) => <span className="tag green">{code}</span>,
    },
    { title: "Price", dataIndex: "Price", ...FilterColumn("Price") },
    { title: "Percent", dataIndex: "percent" },
    { title: "Status", dataIndex: "Type" },
    { title: "Quantity", dataIndex: "Quantity" },
    { title: "Quantity Left", dataIndex: "QuantityLeft" },
    { title: "Note", dataIndex: "note" },
    { title: "Expires", dataIndex: "ExpireDate", ...FilterDateColumn("ExpireDate") },
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
            onChange={(checked) => changeStatus(checked, record.AcademicPurposesID)}
          />
        </>
      ),
    },
    {
      render: () => (
        <>
          <DiscountForm showIcon={true} />
        </>
      ),
    },
  ];

  useEffect(() => {
    getDataDiscount();
  }, [])

  return (
    <div className="row">
      <div className="col-12">
        <TitlePage title="Discount List" />
      </div>
      <div className="col-12">
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
          TitleCard={<DiscountForm showAdd={true} />}
          dataSource={dataDiscount}
          columns={columns}
          Extra={
            <div className="extra-table">
              <FilterTable />
              <SortBox />
            </div>
          }
        />
      </div>
    </div>
  );
};
Discount.layout = LayoutBase;
export default Discount;

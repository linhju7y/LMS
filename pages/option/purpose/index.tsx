import React, { useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption2";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import PurposeForm from "~/components/Global/Option/PurposeForm";
import LayoutBase from "~/components/LayoutBase";
import { purposeApi } from "~/apiBase";
import { Tooltip, Switch } from "antd";
import { useWrap } from "~/context/wrap";
import DecideModal from "~/components/Elements/DecideModal";
const Purpose = () => {
  const [dataPurpose, setDataPurpose] = useState<IPurpose[]>([]);
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
  const [rowData, setRowData] = useState<IPurpose[]>();

  const getDataPurpose = () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });
    (async () => {
      try {
        let res = await purposeApi.getAll();
        res.status == 200 && setDataPurpose(res.data.createAcc);
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

  const getDataPurposeWithID = (ServiceID: number) => {
    setIsLoading({
      type: "GET_WITH_ID",
      status: true,
    });
    (async () => {
      try {
        let res = await purposeApi.getWitdhID(ServiceID);
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

    if(data.AcademicPurposesID) {
      console.log(data);
      try {
        res = await purposeApi.put(data);
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
        res = await purposeApi.post(data);
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
      let res = await purposeApi.patch(dataHidden);
      res.status == 200 && getDataPurpose(),
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
    getDataPurpose();
    // addDataSuccess(), setIsModalVisible(false);
  };

  const columns = [
    { title: "Purposes", dataIndex: "AcademicPurposesIDName", ...FilterColumn("AcademicPurposesIDName") },
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
            onChange={(checked) => changeStatus(checked, record.AcademicPurposesID)}
          />
        </>
      ),
    },
    {
      render: (record) => (
        <>
          <PurposeForm
            PurposeID={record.AcademicPurposesID}
            getDataPurposeWithID={(PurposeID: number) => {
              getDataPurposeWithID(PurposeID)
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

  useEffect(() => {
    getDataPurpose();
  }, [])

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
        TitlePage="PURPOSES list"
        TitleCard={
          <PurposeForm
            showAdd={true}
            addDataSuccess={() => getDataPurpose()}
            isLoading={isLoading}
            _onSubmit={(data: any) => _onSubmit(data)}
          />}
        dataSource={dataPurpose}
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
Purpose.layout = LayoutBase;
export default Purpose;

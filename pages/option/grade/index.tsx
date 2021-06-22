import React, { useEffect, useState, useReducer } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import { Tooltip, Switch } from "antd";
import GradeForm from "~/components/Global/Option/GradeForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import LayoutBase from "~/components/LayoutBase";
import { courseApi } from "~/apiBase";
import { useWrap } from "~/context/wrap";
import { Trash2 } from "react-feather";
import DecideModal from "~/components/Elements/DecideModal";

const Grade = () => {
  const [dataCourse, setDataCourse] = useState<ICourse[]>([]);
  const { showNoti } = useWrap();
  const [isLoading, setIsLoading] = useState({
    type: "",
    status: false,
  });
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState({
    isOpen: false,
    status: null,
  });
  const [dataHidden, setDataHidden] = useState({
    ListCourseId: null,
    Enable: null,
  });
  const [rowData, setRowData] = useState<ICourse[]>();

  // GET DATA COURSE
  const getDataCourse = () => {
    setIsLoading({
      type: "GET_ALL",
      status: true,
    });
    (async () => {
      try {
        let res = await courseApi.getAll();
        res.status == 200 && setDataCourse(res.data.acc);
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

  // GET DATA CORUSE WITH ID
  const getDataCourseWithID = (CourseID: number) => {
    setIsLoading({
      type: "GET_WITH_ID",
      status: true,
    });
    (async () => {
      try {
        let res = await courseApi.getWithID(CourseID);
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

  // _ADD DATA
  const _onSubmit = async (data: any) => {
    setIsLoading({
      type: "ADD_DATA",
      status: true,
    });
    console.log("Data Submit: ", data);

    let res = null;

    if (data.ListCourseID) {
      try {
        res = await courseApi.put(data);
        res?.status == 200 && afterPost();
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
        res = await courseApi.post(data);
        res?.status == 200 && afterPost();
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
      let res = await courseApi.patch(dataHidden);
      res.status == 200 && getDataCourse(),
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

  const afterPost = () => {
    showNoti("success", "Thêm thành công");
    getDataCourse();
    // addDataSuccess(), setIsModalVisible(false);
  };

  const columns = [
    { title: "Grade", dataIndex: "ListCourseName", ...FilterColumn("grade") },
    {
      title: "Description",
      dataIndex: "Description",
    },

    {
      title: "Create on",
      dataIndex: "CreateOn",
      ...FilterDateColumn("regDate"),
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
            onChange={(checked) => changeStatus(checked, record.ListCourseID)}
          />
        </>
      ),
    },
    {
      render: (record) => (
        <>
          <Tooltip title="Cập nhật trung tâm">
            <GradeForm
              showIcon={true}
              CourseID={record.ListCourseID}
              getDataCourseWithID={(CourseID: number) =>
                getDataCourseWithID(CourseID)
              }
              rowData={rowData}
              isLoading={isLoading}
              _onSubmit={(data: any) => _onSubmit(data)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  useEffect(() => {
    getDataCourse();
  }, []);

  // useEffect(() => {
  //   dataSuccess && getDataCourse();
  // }, [dataSuccess]);

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
        TitlePage="Danh sách khối học"
        TitleCard={
          <GradeForm
            showAdd={true}
            addDataSuccess={() => getDataCourse()}
            isLoading={isLoading}
            _onSubmit={(data: any) => _onSubmit(data)}
          />
        }
        dataSource={dataCourse}
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
Grade.layout = LayoutBase;
export default Grade;

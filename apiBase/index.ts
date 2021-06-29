export { areaApi } from "./options/area";
export { branchApi } from "./options/branch";
export { districtApi } from "./options/district";
export { courseApi } from "./options/course";
export { serviceApi } from "./options/service";
export { postContentApi } from "./options/post";
export { supplierApi } from "./options/supplier";
export { discountApi } from "./options/discount";
export { purposeApi } from "./options/purpose";
export { customerSupplierApi } from "./options/customer-supplier";

// export const addDataDistrict = async (data) => {
//   let result;
//   try {
//     console.log("Data in instance: ", data);

//     const formdata = new FormData();
//     formdata.append("ListCourseCode", data.ListCourseCode);
//     formdata.append("ListCourseName", data.ListCourseName);
//     formdata.append("Description", data.Description);
//     // formdata.append("Enable", "true");
//     let res = await instance.post("/api/Course/InsertCourse", formdata, {});
//     result = res.data;
//   } catch (error) {
//     console.log("Error: ", error);
//     return error.message ? error.message : (result = "");
//   }
//   return result;
// };

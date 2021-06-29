import { instance } from "~/apiBase/instance";

class CustomerSupplierApi {
    getAll = () =>
        instance.get<IApiResult<ICustomerSupplier[]>>("/api/SourceInformation/GetAllSource");
    getWitdhID = (CustomerSupplierID: number) =>
        instance.get<IApiResult<ICustomerSupplier[]>>("/api/SourceInformation/GetSource", {
            params: {
                id: CustomerSupplierID
            }
        });
    post = (data: ICustomerSupplier) => instance.post("/api/SourceInformation/InsertSource", data, {}); 
    put = (data: ICustomerSupplier) => instance.put("/api/SourceInformation/UpdateSource", data, {}); 
    patch = (data: any) => instance.patch("/api/Services/UpdateHiddenService", data);
}

export const customerSupplierApi = new CustomerSupplierApi();
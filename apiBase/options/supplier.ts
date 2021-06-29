import { instance } from "~/apiBase/instance";

class SupplierApi {
    getAll = () =>
        instance.get<IApiResult<ISupplier[]>>("/api/SupplierServices/GetAllSS");
    getWitdhID = (SupplierID: number) =>
        instance.get<IApiResult<ISupplier[]>>("/api/SupplierServices/GetSS", {
            params: {
                id: SupplierID
            }
        });
    post = (data: ISupplier) => instance.post("/api/SupplierServices/InsertSS", data, {}); 
    put = (data: ISupplier) => instance.put("/api/SupplierServices/UpdateSS", data, {}); 
    patch = (data: any) => instance.patch("/api/Services/UpdateHiddenService", data);
}

export const supplierApi = new SupplierApi();
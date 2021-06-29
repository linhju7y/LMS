import { instance } from "~/apiBase/instance";

class DiscountApi {
    getAll = () =>
        instance.get<IApiResult<IDiscount[]>>("/api/Discount/GetAllDiscount");
    getWitdhID = (DiscountId: number) =>
        instance.get<IApiResult<IDiscount[]>>("/api/Discount/GetDiscount", {
            params: {
                id: DiscountId
            }
        });
    post = (data: IDiscount) => instance.post("/api/Discount/InsertDiscount", data, {}); 
    put = (data: IDiscount) => instance.put("/api/Discount/UpdateDiscount", data, {}); 
    patch = (data: any) => instance.patch("/api/Services/UpdateHiddenService", data);
}

export const discountApi = new DiscountApi();
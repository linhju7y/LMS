import { instance } from "~/apiBase/instance";

class PurpostApi {
    getAll = () =>
        instance.get<IApiResult<IPurpose[]>>("/api/AcademicPurposes/GetAllAP");
    getWitdhID = (PurposeId: number) =>
        instance.get<IApiResult<IPurpose[]>>("/api/AcademicPurposes/GetAP", {
            params: {
                id: PurposeId
            }
        });
    post = (data: IPurpose) => instance.post("/api/AcademicPurposes/InsertAP", data, {}); 
    put = (data: IPurpose) => instance.put("/api/AcademicPurposes/UpdateAP", data, {}); 
    patch = (data: any) => instance.patch("/api/PostContent/UpdatePostContent", data);
}

export const purposeApi = new PurpostApi();
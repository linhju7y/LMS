import { instance } from "~/apiBase/instance";

class PostContentApi {
    getAll = () =>
        instance.get<IApiResult<IPostContent[]>>("/api/PostContent/GetAllPostContent");
    getWitdhID = (ServiceId: number) =>
        instance.get<IApiResult<IPostContent[]>>("/api/PostContent/GetPostContent", {
            params: {
                id: ServiceId
            }
        });
    post = (data: IPostContent) => instance.post("/api/PostContent/InsertPostContent", data, {}); 
    put = (data: IPostContent) => instance.put("/api/PostContent/UpdatePostContent", data, {}); 
    patch = (data: any) => instance.patch("/api/PostContent/UpdatePostContent", data);
}

export const postContentApi = new PostContentApi();
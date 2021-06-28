type IPostContent = IBaseApi<{
    ID: number,
    TitlePost: string,
    PostIMG: string,
    ContentPost: string,
    Status: number,
    isHideStaff: boolean,
    isHideStudent: boolean,
    Enable: boolean,
    CreatedOn: string,
    CreatedBy: string,
    ModifiedOn: string,
    ModifiedBy: string
  }>;
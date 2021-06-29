type IDiscount = IBaseApi<{
    ID: 1,
    VoucherName: string,
    VoucherCode: string,
    Price: string,
    Type: string,
    IsPercent: boolean,
    IsUsed: boolean,
    Note: string,
    ExpireDate: string,
    Enable: true,
    CreatedOn: string,
    CreatedBy: string,
    ModifiedOn: string,
    ModifiedBy: string
}>;
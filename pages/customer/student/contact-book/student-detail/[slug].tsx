import React from "react";
import LayoutBase from "~/components/LayoutBase";
import ProfileCustomer from "~/components/Profile/ProfileCustomer/ProfileCustomer";

const CustomerDetail = () => {
  return <ProfileCustomer />;
};
CustomerDetail.sharedComponentFunction = LayoutBase;
export default CustomerDetail;

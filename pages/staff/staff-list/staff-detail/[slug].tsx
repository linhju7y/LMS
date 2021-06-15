import React, { useState } from "react";

import ProfileBase from "~/components/Profile";
import LayoutBase from "~/components/LayoutBase";

const StaffDetail = () => {
  return <ProfileBase />;
};

StaffDetail.sharedComponentFunction = LayoutBase;
export default StaffDetail;

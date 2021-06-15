import React, { useState } from "react";
import LayoutBase from "~/components/LayoutBase";
import InvoiceForm from "~/components/Global/Customer/Finance/InvoiceForm";

const InvoiceDetail = () => {
  return <InvoiceForm />;
};
InvoiceDetail.sharedComponentFunction = LayoutBase;
export default InvoiceDetail;

import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import React from "react";

const SellerPage = ({values,setFieldValue}) => {
  return (
    <>
      <CheckBoxField name={`[content][main_content][seller][status]`} title="Status"/>
    </>
  );
};

export default SellerPage;

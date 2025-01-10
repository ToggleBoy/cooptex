import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";

const BrandsTab = ({ name,setBrandSearch,brandData }) => {

  return (
    <>
      <CheckBoxField name={`[content][brands][status]`} title="Status" />
      <SearchableSelectInput
        nameList={[
          {
            name: name,
            title: "Brands",
            inputprops: {
              name: name,
              id: name,
              options: brandData || [],
              setsearch: setBrandSearch,
            },
          },
        ]}
      />
    </>
  );
};

export default BrandsTab;

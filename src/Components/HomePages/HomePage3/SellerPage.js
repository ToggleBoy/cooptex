import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

import { useTranslation } from "react-i18next";


const SellerPage = ({name,setStoreSearch,storeData}) => {
  
  
  const { t } = useTranslation("common");
  return (
    <>
      <CheckBoxField name={`[content][seller][status]`} title="Status" />
      <SimpleInputField
        nameList={[
          {
            name: `[content][seller][title]`,
            placeholder: t("EnterTitle"),
            title: "Title",
          },
          {
            name: `[content][seller][description]`,
            placeholder: t("EnterDescription"),
            title: "Description",
            type: "textarea",
          },
        ]}
      />
      <SearchableSelectInput
                            nameList={[
                                {
                                    name: name? name :"sellerID",      
                                    title: "Store",
                                    inputprops: {
                                        name: name? name :"sellerID",
                                        id: name? name :"sellerID",
                                        options: storeData || [],
                                        setsearch: setStoreSearch,
                                    },
                                },
                            ]}
                        />
      
    </>
  );
};

export default SellerPage;

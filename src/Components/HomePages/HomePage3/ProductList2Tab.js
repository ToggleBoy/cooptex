
import { useTranslation } from "react-i18next";
import SimpleInputField from "../../InputFields/SimpleInputField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";

const ProductList2Tab = ({ productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][products_list_2][title]`, placeholder: t("EnterTitle"), title: "Title" }, { name: `[content][products_list_2][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
            ]} />
            <SearchableSelectInput
                nameList={
                    [{
                        name: 'productList2Product',
                        title: "Products",
                        inputprops: {
                            name: 'productList2Product',
                            id: 'productList2Product',
                            options: productData || [],
                            setsearch: setSearch,
                        }
                    },
                    ]}
            />
            <CheckBoxField name={`[content][products_list_2][status]`} title="Status" />
        </>
    )
}
export default ProductList2Tab
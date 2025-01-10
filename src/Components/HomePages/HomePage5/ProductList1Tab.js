import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ nameKey, productData, description, customName, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: `[content][${nameKey}][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
            {description && <SimpleInputField nameList={[{ name: `[content][${nameKey}][description]`, placeholder: t("EnterDescription"), title: "Description" }]} />}
            {
                productData && <SearchableSelectInput
                    nameList={
                        [{
                            name: customName ? customName : 'productListProductIds',
                            title: "Products",
                            inputprops: {
                                name: customName ? customName : 'productListProductIds',
                                id: customName ? customName : 'productListProductIds',
                                options: productData || [],
                                setsearch: setSearch,
                            }
                        },
                        ]}
                />
            }
            <CheckBoxField name={`[content][${nameKey}][status]`} title="Status" />
        </>
    )
}

export default ProductList1Tab
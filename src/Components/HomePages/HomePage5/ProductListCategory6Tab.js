import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const ProductListCategory6Tab = ({ nameKey, productName, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][${nameKey}][title]`, placeholder: t("EnterTitle"), title: "Title" }
            ]} />
            <SearchableSelectInput
                nameList={
                    [{
                        name: productName,
                        title: "Products",
                        inputprops: {
                            name: productName,
                            id: productName,
                            options: productData || [],
                            setsearch: setSearch,
                        }
                    },
                    ]}
            />
            <CheckBoxField name={`[content][${nameKey}][status]`} title="Status" />
        </>
    )
}

export default ProductListCategory6Tab
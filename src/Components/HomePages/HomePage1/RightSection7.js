import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from 'react-icons/ri';
import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';


const RightSection7 = ({ values, active, setActive, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(8)}>{values['content']?.['main_content']['section7_products']['title']}<RiArrowDownLine />
            </div>
            {active == 8 && (
                <div className="rule-edit-form">
                    <SimpleInputField nameList={[
                        { name: `[content][main_content][section7_products][title]`, placeholder: t("EnterTitle"), title: "Title" }, { name: `[content][main_content][section7_products][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                    ]} />
                    <SearchableSelectInput
                        nameList={
                            [{
                                name: 'mainRight7TabProductIds',
                                title: "Products",
                                inputprops: {
                                    name: 'mainRight7TabProductIds',
                                    id: 'mainRight7TabProductIds',
                                    options: productData || [],
                                    setsearch: setSearch,
                                }
                            },
                            ]}
                    />
                    <CheckBoxField name={`[content][main_content][section7_products][status]`} title="Status" />
                </div>
            )}
        </div>
    )
}

export default RightSection7
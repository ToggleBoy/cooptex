import SimpleInputField from '../../InputFields/SimpleInputField'
import CheckBoxField from '../../InputFields/CheckBoxField'
import { RiArrowDownLine } from 'react-icons/ri'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import { useTranslation } from "react-i18next";

const RightSection1 = ({ values, setActive, active, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <div className='shipping-accordion-custom'>
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(1)}>{values['content']?.['main_content']?.['section1_products']?.['title']}<RiArrowDownLine />
                </div>
                {active == 1 && (
                    <div className="rule-edit-form">
                        <SimpleInputField nameList={[
                            { name: `[content][main_content][section1_products][title]`, placeholder: t("EnterTitle"), title: "Title" },
                            { name: `[content][main_content][section1_products][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                        ]} />
                        <SearchableSelectInput
                            nameList={
                                [{
                                    name: 'mainRight1TabProductIds',
                                    title: "Products",
                                    inputprops: {
                                        name: 'mainRight1TabProductIds',
                                        id: 'mainRight1TabProductIds',
                                        options: productData || [],
                                        setsearch: setSearch,
                                    }
                                },
                                ]}
                        />
                        <CheckBoxField name={`[content][main_content][section1_products][status]`} title="Status" />
                    </div>
                )}
            </div>
        </>
    )
}

export default RightSection1
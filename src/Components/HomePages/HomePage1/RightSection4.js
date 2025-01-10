import { RiArrowDownLine } from 'react-icons/ri'
import CheckBoxField from '../../InputFields/CheckBoxField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const RightSection4 = ({ values, active, setActive, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(4)}>{values['content']?.['main_content']['section4_products']['title']}<RiArrowDownLine />
            </div>
            {active == 4 && (
                <div className="rule-edit-form">
                    <SimpleInputField nameList={[
                        { name: `[content][main_content][section4_products][title]`, placeholder: t("EnterTitle"), title: "Title" },
                        { name: `[content][main_content][section4_products][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                    ]} />
                    <SearchableSelectInput
                        nameList={
                            [{
                                name: 'mainRightBannerProductIds',
                                title: "Products",
                                inputprops: {
                                    name: 'mainRightBannerProductIds',
                                    id: 'mainRightBannerProductIds',
                                    options: productData || [],
                                    setsearch: setSearch,
                                }
                            },
                            ]}
                    />
                    <CheckBoxField name={`[content][main_content][section4_products][status]`} title="Status" />
                </div>
            )}
        </div>
    )
}

export default RightSection4
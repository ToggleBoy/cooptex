import { RiArrowDownLine } from 'react-icons/ri'
import CheckBoxField from '../../InputFields/CheckBoxField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const SellerPage = ({ values, active, setActive, storeData, setStoreSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(5)}>{values['content']?.['main_content']['seller']['title']}<RiArrowDownLine />
            </div>
            {active == 5 && (
                <div className="rule-edit-form">
                    <CheckBoxField name={`[content][main_content][seller][status]`} title="Status" />
                    <SimpleInputField nameList={[
                        { name: `[content][main_content][seller][title]`, placeholder: t("EnterTitle"), title: "Title" },
                        { name: `[content][main_content][seller][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                    ]} />
                    <SearchableSelectInput
                        nameList={
                            [{
                                name: 'topSellerIds',
                                title: "Store",
                                inputprops: {
                                    name: 'topSellerIds',
                                    id: 'topSellerIds',
                                    options: storeData || [],
                                    setsearch: setStoreSearch,
                                }
                            },
                            ]}
                    />
                    
                </div>
            )}
        </div>
    )
}

export default SellerPage
import { RiArrowDownLine } from 'react-icons/ri'
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CheckBoxField from '../../InputFields/CheckBoxField'
import FileUploadField from '../../InputFields/FileUploadField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const RightSection2 = ({ values, setFieldValue, active, setActive }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(2)}>{values['content']?.['main_content']['section2_categories_list']['title']}<RiArrowDownLine />
            </div>
            {active == 2 && (
                <div className="rule-edit-form">
                    <SimpleInputField nameList={[
                        { name: `[content][main_content][section2_categories_list][title]`, placeholder: t("EnterTitle"), title: "Title" },
                        { name: `[content][main_content][section2_categories_list][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                    ]} />
                    <SearchableSelectInput
                        nameList={[
                            {
                                name: `[content][main_content][section2_categories_list][sort]`,
                                inputprops: {
                                    name: `[content][main_content][section2_categories_list][sort]`,
                                    id: `[content][main_content][section2_categories_list][sort]`,
                                    options: [{ id: "asc", name: "ASC" }, { id: "desc", name: "DESC" }],
                                },
                                title: "Sort"
                            },
                        ]}
                    />
                    <FileUploadField name="section2CategoryImage" title='Image' id="section2CategoryImage" type="file" values={values} setFieldValue={setFieldValue} showImage={values["section2CategoryImage"]} helpertext={getHelperText('153x157px')} />
                    <CheckBoxField name={`[content][main_content][section2_categories_list][status]`} title="Status" />
                </div>
            )}
        </div>
    )
}

export default RightSection2
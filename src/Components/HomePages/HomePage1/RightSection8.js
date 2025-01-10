import { RiArrowDownLine } from 'react-icons/ri'
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CheckBoxField from '../../InputFields/CheckBoxField'
import FileUploadField from '../../InputFields/FileUploadField'
import CommonRedirect from '../CommonRedirect'

import { useTranslation } from "react-i18next"

const RightSection8 = ({ values, setFieldValue, active, setActive, productData, categoryData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(9)}>{t("Banner")}<RiArrowDownLine />
            </div>
            {active == 9 && (
                <div className="rule-edit-form">
                    <FileUploadField name="section8_VegitableImage" title='Image' id="section8_VegitableImage" type="file" values={values} setFieldValue={setFieldValue} showImage={values['section8_VegitableImage']} helpertext={getHelperText('1189x297px')} />
                    <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: 'mainRight8LinkType', multipleNameKey: 'mainRight8Link' }} setSearch={setSearch} />
                    <CheckBoxField name="[content][main_content][section8_full_width_banner][status]" title="Status" />
                </div>
            )}
        </div>
    )
}

export default RightSection8
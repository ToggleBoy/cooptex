import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from 'react-icons/ri';
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText';
import CheckBoxField from '../../InputFields/CheckBoxField';
import FileUploadField from '../../InputFields/FileUploadField';
import CommonRedirect from '../CommonRedirect';


const RightSection6 = ({ values, setFieldValue, active, setActive, productData, categoryData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(7)}>{t("Banner")} <RiArrowDownLine /></div>
            {active == 7 && (
                <>
                    <div className="rule-edit-form">
                        <CheckBoxField name={`[content][main_content][section6_two_column_banners][status]`} title="Status" />
                        <h4 className='fw-semibold mb-3 txt-primary w-100'>{t("Banner")} 1</h4>
                        <FileUploadField name="section6_twocolumnBanner1" title='Image' id="section6_twocolumnBanner1" type="file" values={values} setFieldValue={setFieldValue} showImage={values['section6_twocolumnBanner1']} helpertext={getHelperText('790x286px')} />
                        <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: 'mainRight6LinkType1', multipleNameKey: 'mainRight6Link1' }} setSearch={setSearch} />
                    </div>
                    <div className="rule-edit-form">
                        <h4 className='fw-semibold mb-3 txt-primary w-100'>{t("Banner")} 2</h4>
                        <FileUploadField name="section6_twocolumnBanner2" title='Image' id="section6_twocolumnBanner2" type="file" values={values} setFieldValue={setFieldValue} showImage={values["section6_twocolumnBanner2"]} helpertext={getHelperText('383x286px')} />
                        <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: 'mainRight6LinkType2', multipleNameKey: 'mainRight6Link2' }} setSearch={setSearch} />
                    </div>
                </>
            )}
        </div>
    )
}

export default RightSection6
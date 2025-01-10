import FileUploadField from '../../InputFields/FileUploadField'
import CheckBoxField from '../../InputFields/CheckBoxField'
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CommonRedirect from '../CommonRedirect'

const SliderBanner = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
    return (
        <>
            <CheckBoxField name={`[content][slider_product_with_banner][left_side_banners][status]`} title="Status" />
            <FileUploadField name="sliderBanner" title='Image' showImage={values['sliderBanner']} id="sliderBanner" type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('1594x101px')} />
            <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: 'sliderBannerLinkType', multipleNameKey: 'sliderBannerLink' }} setSearch={setSearch} />
        </>
    )
}

export default SliderBanner
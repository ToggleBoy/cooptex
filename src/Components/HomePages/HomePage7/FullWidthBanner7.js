import FileUploadField from '../../InputFields/FileUploadField'
import CheckBoxField from '../../InputFields/CheckBoxField'
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CommonRedirect from '../CommonRedirect'

const FullWidthBanner7 = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
    return (
        <>
            <FileUploadField name="coupons" title='Image' showImage={values['coupons']} id="coupons" type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('1594x101px')} />
            <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: 'couponsLinkType', multipleNameKey: 'couponsLink' }} setSearch={setSearch} />
            <CheckBoxField name={`[content][coupons][status]`} title="Status" />
        </>
    )
}

export default FullWidthBanner7
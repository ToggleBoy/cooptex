import { useQuery } from '@tanstack/react-query'
import placeHolderImage from "../../../../public/assets/images/placeholder.png"
import request from '../../../Utils/AxiosUtils'
import { product } from '../../../Utils/AxiosUtils/API'
import Loader from '../../CommonComponent/Loader'
import CheckBoxField from '../../InputFields/CheckBoxField'
import MultiSelectField from '../../InputFields/MultiSelectField'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"
import { useRouter } from 'next/navigation'

const ProductSlider2 = ({ values, setFieldValue }) => {
    
    const router = useRouter()
    const { t } = useTranslation( 'common');
    const { data, isLoading } = useQuery([product], () => request({ url: product, params: { status: 1 } },router), {
        select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.name, image: elem?.product_thumbnail?.original_url || placeHolderImage } })
    });
    if (isLoading) return <Loader />
    return (
        <>
            <h4 className='fw-semibold mb-3 txt-primary w-100'>{t("ProductSlider")} 2</h4>
            <SimpleInputField nameList={[
                { name: `[content][main_content][section2_slider_products][product_slider_2][title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='mainContentProduct2ProductIds' title="Products" data={data} />
            <CheckBoxField name={`[content][main_content][section2_slider_products][product_slider_2][status]`} title="Status" />
        </>
    )
}

export default ProductSlider2
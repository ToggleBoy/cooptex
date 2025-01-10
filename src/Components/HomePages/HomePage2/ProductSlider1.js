import CheckBoxField from '../../InputFields/CheckBoxField';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const ProductSlider1 = () => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <h4 className='fw-semibold mb-3 txt-primary w-100'>{t("ProductSlider")} 1</h4>
            <SimpleInputField nameList={[
                { name: `[content][main_content][section2_slider_products][product_slider_1][title]`, placeholder: t("EnterTitle"), title: "Title" }
            ]} />
            <CheckBoxField name={`[content][main_content][section2_slider_products][product_slider_1][status]`} title="Status" />
        </>
    )
}

export default ProductSlider1
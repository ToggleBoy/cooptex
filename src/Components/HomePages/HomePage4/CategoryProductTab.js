import CheckBoxField from '../../InputFields/CheckBoxField';
import MultiSelectField from '../../InputFields/MultiSelectField';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ values, setFieldValue, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: "[content][categories_products][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='categoryProduct' title="Categories" data={categoryData} />
            <CheckBoxField name="[content][categories_products][status]" title="Status" />
        </>
    )
}

export default CategoryProductTab
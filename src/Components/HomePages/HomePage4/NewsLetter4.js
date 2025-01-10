import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CheckBoxField from '../../InputFields/CheckBoxField'
import FileUploadField from '../../InputFields/FileUploadField'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const NewsLetter4 = ({ values, setFieldValue }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[
                { name: "[content][news_letter][title]", placeholder: t("EnterTitle"), title: "Title" },
                { name: "[content][news_letter][sub_title]", placeholder: t("EnterSubTitle"), title: "SubTitle" }
            ]} />
            <FileUploadField name="newsLetterImage" title='Image' id="newsLetterImage" showImage={values['newsLetterImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('1600x408px')} />
            <CheckBoxField name="[content][news_letter][status]" title="Status" />
        </>
    )
}

export default NewsLetter4
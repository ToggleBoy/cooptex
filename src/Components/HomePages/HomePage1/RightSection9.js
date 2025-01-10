import { useQuery } from '@tanstack/react-query'
import { RiArrowDownLine } from 'react-icons/ri'
import request from '../../../Utils/AxiosUtils'
import { blog } from '../../../Utils/AxiosUtils/API'
import Loader from '../../CommonComponent/Loader'
import CheckBoxField from '../../InputFields/CheckBoxField'
import MultiSelectField from '../../InputFields/MultiSelectField'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"
import { useRouter } from 'next/navigation'

const RightSection9 = ({ values, setFieldValue, active, setActive }) => {
    
    const { t } = useTranslation( 'common');
    const router = useRouter()   
    const { data, isLoading } = useQuery([blog], () => request({ url: blog },router), {
        refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem?.id, name: elem.title } })
    });
    if (isLoading) return <Loader />
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(10)}>{values['content']?.['main_content']['section9_featured_blogs']['title']}<RiArrowDownLine />
            </div>
            {active == 10 && (
                <div className="rule-edit-form">
                    <SimpleInputField nameList={[
                        { name: `[content][main_content][section9_featured_blogs][title]`, placeholder: t("EnterTitle"), title: "Title" },
                        { name: `[content][main_content][section9_featured_blogs][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" }
                    ]} />
                    <MultiSelectField values={values} setFieldValue={setFieldValue} name='mainRightContentBlog' title="Blogs" data={data} />
                    <CheckBoxField name="[content][main_content][section9_featured_blogs][status]" title="Status" />
                </div>
            )}
        </div>
    )
}

export default RightSection9
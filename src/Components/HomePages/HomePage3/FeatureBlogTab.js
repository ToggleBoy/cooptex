import MultiSelectField from "../../InputFields/MultiSelectField";
import SimpleInputField from "../../InputFields/SimpleInputField";
import { useQuery } from "@tanstack/react-query";
import request from "../../../Utils/AxiosUtils";
import Loader from "../../CommonComponent/Loader";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { blog } from "../../../Utils/AxiosUtils/API";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const FeatureBlogTab = ({ values, setFieldValue ,noDescription }) => {
    
    const { t } = useTranslation( 'common');
    const sendNameList =[
        { name: `[content][featured_blogs][title]`, placeholder: t("EnterTitle"), title: "Title" }, { name: `[content][featured_blogs][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
    ]
    const router = useRouter()
    
    const { data, isLoading } = useQuery([blog], () => request({ url: blog },router), {
        refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.title } })
    });
    if (isLoading) return <Loader />
    return (
        <>
            <SimpleInputField nameList={noDescription ? [sendNameList[0]] :sendNameList} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='featureBlogSelect' title="Blogs" data={data} />
            <CheckBoxField name={`[content][featured_blogs][status]`} title="Status" />
        </>
    )
}
export default FeatureBlogTab
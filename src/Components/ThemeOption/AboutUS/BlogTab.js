import CheckBoxField from '../../InputFields/CheckBoxField'
import { blog } from '../../../Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import request from '../../../Utils/AxiosUtils';
import MultiSelectField from '../../InputFields/MultiSelectField';
import { useRouter } from 'next/navigation';

const BlogTab = ({ values, setFieldValue }) => {
    const router = useRouter();
    const { data } = useQuery([blog], () => request({ url: blog },router), {
        refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem?.id, name: elem.title } })
    });
    if (!data) return null
    return (
        <>
            <CheckBoxField name="[options][about_us][blog][status]" title="status" />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='aboutUsBlog' title="Blogs" data={data} />
        </>
    )
}

export default BlogTab
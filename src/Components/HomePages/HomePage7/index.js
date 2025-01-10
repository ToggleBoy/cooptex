import { HomePage7SettingTitle } from '@/Data/TabTitleListData';
import FormBtn from '@/Elements/Buttons/FormBtn';
import TabTitle from '@/Components/Widgets/TabTitle';
import request from '@/Utils/AxiosUtils';
import { HomePageAPI } from '@/Utils/AxiosUtils/API';
import { RecursiveSet } from '@/Utils/CustomFunctions/RecursiveSet';
import useCreate from '@/Utils/Hooks/useCreate';
import { useQuery } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from 'reactstrap';
import AllTabsHomePage7 from './AllTabsHomePage7';
import HomePage7InitialValue from './HomePage7InitialValue';
import HomePage7Submit from './HomePage7Submit';
import { useRouter } from 'next/navigation';

const HomePage7 = ({title}) => {
  
  const { t } = useTranslation( 'common');
  const [activeTab, setActiveTab] = useState("1");
  const refRefetch = useRef()
  const router = useRouter()
    const { data, isLoading,refetch } = useQuery(['HomePageAPI'], () => request({ url: HomePageAPI, params: { slug: 'moscow' } },router), {
        refetchOnWindowFocus: false, select: (res) => {
            return res.data
        }
    });
    const { mutate, isLoading: createLoader } = useCreate(`${HomePageAPI}/${data?.id}`, false, false, false, (resDta) => {
      refRefetch?.current?.call()
  });
  let NewSettingsData = data || {};
  let IncludeList = ['status']
  RecursiveSet({ data: NewSettingsData, IncludeList })

  return (
    <Formik
            enableReinitialize
            initialValues={{
                ...HomePage7InitialValue(NewSettingsData)
            }}
            onSubmit={(values) => {
                HomePage7Submit(values, mutate)
            }}>
            {({ values, errors, touched, setFieldValue }) => (
                <Col>
                    <Card>
                        <div className="title-header option-title">
                            <h5>{t(title)}</h5>
                        </div>
                        <Form className="theme-form theme-form-2 mega-form vertical-tabs">
                            <Row>
                                <Col xl="3" lg="4">
                                    <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={HomePage7SettingTitle} errors={errors} touched={touched} />
                                </Col>
                                <AllTabsHomePage7 activeTab={activeTab} values={values} setFieldValue={setFieldValue} isLoading={isLoading} ref={refRefetch} />
                                <FormBtn loading={createLoader} />
                            </Row>
                        </Form>
                    </Card>
                </Col>
            )}
        </Formik>
  )
}

export default HomePage7
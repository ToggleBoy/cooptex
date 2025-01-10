import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';
import { Col, Row } from 'reactstrap';
import placeHolderImage from "../../../../public/assets/images/placeholder.png";
import Btn from '../../../Elements/Buttons/Btn';
import request from '../../../Utils/AxiosUtils';
import { product } from '../../../Utils/AxiosUtils/API';
import Loader from '../../CommonComponent/Loader';
import CheckBoxField from '../../InputFields/CheckBoxField';
import MultiSelectField from '../../InputFields/MultiSelectField';
import SimpleInputField from '../../InputFields/SimpleInputField';

import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';

const DealOfDaysTab = ({ values, setFieldValue }) => {
  
  const { t } = useTranslation( 'common');
  const [active, setActive] = useState(0)
  const router = useRouter()
  const { data, isLoading } = useQuery([product], () => request({ url: product, params: { status: 1 } },router), {
    refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.name, image: elem?.product_thumbnail?.original_url || placeHolderImage } })
  });
  if (isLoading) return <Loader />
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][deal_of_days][title]`, placeholder: t("EnterTitle"), title: "Title" }
      ]} />
      <CheckBoxField name={`[content][deal_of_days][status]`} title="Status" />
      <Btn className="btn-theme my-4" onClick={() => setFieldValue("[content][deal_of_days][deals]", [...values['content']['deal_of_days']['deals'], { title: "", description: "" }])} title="AddDeal" />
      {
        values['content']['deal_of_days']['deals'].map((elem, index) => {
          return <Row className='align-items-center' key={index}>
            <Col xs="10">
              <div className='shipping-accordion-custom'>
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>{values['content']['deal_of_days']['deals'][index]['label'] || 'Text Here'}<RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <SimpleInputField nameList={[
                      { name: `[content][deal_of_days][deals][${index}][label]`, placeholder: t("EnterLabel"), title: "Label" },
                      { name: `[content][deal_of_days][deals][${index}][offer_title]`, placeholder: t("EnterOfferTitle"), title: "OfferTitle" },
                      { name: `[content][deal_of_days][deals][${index}][end_date]`, type: "date", placeholder: t("EnterEndDate"), title: "EndDate" },
                    ]} />

                    <MultiSelectField values={values} setFieldValue={setFieldValue} name={`DealOfDateImage${index}`} id={`DealOfDateImage${index}`} title="Products" data={data} />
                    <CheckBoxField name={`[content][deal_of_days][deals][${index}][status]`} title="Status" />
                  </div>
                )}
              </div>
            </Col>
            <Col xs="2">
              <a className="h-100 w-100 cursor-pointer"
                onClick={() => values['content']['deal_of_days']['deals'].length > 1 && setFieldValue("[content][deal_of_days][deals]", values['content']['deal_of_days']['deals'].filter((item, i) => i !== index),)}>{t('Remove')}</a>
            </Col>
          </Row>
        })
      }
    </>
  )
}

export default DealOfDaysTab
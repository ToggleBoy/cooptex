import { useTranslation } from "react-i18next";
import { Col, Row } from 'reactstrap';
import { FooterUseFulLink, helpCenter } from '../../Data/TabTitleListData';
import CheckBoxField from '../InputFields/CheckBoxField';
import MultiSelectField from '../InputFields/MultiSelectField';
import SearchableSelectInput from '../InputFields/SearchableSelectInput';
import SimpleInputField from '../InputFields/SimpleInputField';
import FooterSubscribe from './FooterSubscribe';

const FooterTab = ({ values, setFieldValue, errors, categoryData }) => {

  const { t } = useTranslation('common');
  return (
    <>
      <Row>
        <Col sm="12">
          <SearchableSelectInput
            nameList={[
              {
                name: '[options][footer][footer_style]',
                title: 'FooterStyle',
                inputprops: {
                  name: '[options][footer][footer_style]',
                  id: '[options][footer][footer_style]',
                  options: [
                    { id: 'light_mode', name: 'FooterLight' },
                    { id: 'dark_mode', name: 'FooterDark' },
                    { id: 'footer_subscribe', name: 'FooterSubscribe' },
                  ],
                  defaultOption: 'Select Footer Style',
                },
              },
            ]}
          />
          {values["options"]["footer"]?.["footer_style"] === "footer_subscribe" && <FooterSubscribe values={values} setFieldValue={setFieldValue} />}
          <SimpleInputField
            nameList={[
              { name: '[options][footer][footer_about]', type: 'textarea', title: 'FooterContent', placeholder: t('EnterFooterAbout') },
              { name: '[options][footer][about_address]', type: 'textarea', title: 'Address', placeholder: t('EnterAddress') },
              { name: '[options][footer][about_email]', title: 'Email', placeholder: t('EnterEmail') }
            ]}
          />
          <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name='footer_categories' title={'FooterCategories'} data={categoryData || []} />
          <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} title='UsefulLink' name='useful_link' data={FooterUseFulLink} helpertext="*Pick Usefull Link to showcase in the footer area." />
          <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name='help_center' title='Help Pages' data={helpCenter} helpertext="*Pick help center Link to showcase in the footer area." />
          <SimpleInputField
            nameList={[
              { name: '[options][footer][support_number]', title: 'SupportNumber', placeholder: t('EnterSupportNumber') },
              { name: '[options][footer][support_email]', title: 'SupportEmail', placeholder: t('EnterSupportEmail') },
              { name: '[options][footer][play_store_url]', title: 'PlayStoreUrl', placeholder: t('EnterPlayStoreUrl') },
              { name: '[options][footer][app_store_url]', title: 'AppStoreUrl', placeholder: t('EnterAppStoreUrl') },
            ]}
          />
          <CheckBoxField name='[options][footer][social_media_enable]' title='SocialMediaEnable' />
          {values['options']?.['footer']?.['social_media_enable'] &&
            <SimpleInputField
              nameList={[
                { name: '[options][footer][facebook]', title: 'Facebook', placeholder: t('Enterfacebook') },
                { name: '[options][footer][instagram]', title: 'Instagram', placeholder: t('EnterInstagram') },
                { name: '[options][footer][twitter]', title: 'Twitter', placeholder: t('EnterTwitter') },
                { name: '[options][footer][pinterest]', title: 'Pinterest', placeholder: t('EnterPinterest') },
              ]}
            />
          }
          <CheckBoxField name='[options][footer][footer_copyright]' title='FooterCopyRight' />
          {values?.['options']?.['footer']?.['footer_copyright'] && (
            <SimpleInputField nameList={[{ name: '[options][footer][copyright_content]', type: 'textarea', title: 'CopyrightText', placeholder: t('EnterCopyrightContent') }]} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default FooterTab;

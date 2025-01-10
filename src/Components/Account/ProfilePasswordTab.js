import { Form, Formik } from 'formik';
import { useTranslation } from "react-i18next";
import Btn from '../../Elements/Buttons/Btn';
import { updateProfilePassword } from '../../Utils/AxiosUtils/API';
import useCreate from '../../Utils/Hooks/useCreate';
import { YupObject, nameSchema } from '../../Utils/Validation/ValidationSchemas';
import SimpleInputField from '../InputFields/SimpleInputField';

const ProfilePasswordTab = () => {
    
    const { t } = useTranslation( 'common');
    const { mutate, isLoading } = useCreate(updateProfilePassword, false, "/account");
    return (
        <Formik
            enableReinitialize
            initialValues={{
                current_password: "",
                password: "",
                password_confirmation: ""
            }}
            validationSchema={YupObject({
                current_password: nameSchema,
                password: nameSchema,
                password_confirmation: nameSchema
            })}
            onSubmit={(values) => {
                values["_method"] = "put";
                mutate(values);
            }}>
            {({ values, setFieldValue }) => (
                <Form className="theme-form theme-form-2 mega-form">
                    <SimpleInputField nameList={[{ name: 'current_password', title: 'Current Password', placeholder: t('EnterCurrentPassword'), require: "true" }, { name: 'password', title: 'Password', require: "true", placeholder: t("EnterNewPassword") }, { name: 'password_confirmation', title: 'Confirm Password', require: "true", placeholder: t("EnterConfirmPassword") }]} />
                    <Btn className="btn btn-theme ms-auto mt-4" type="submit" title="Save" loading={Number(isLoading)} />
                </Form>
            )}
        </Formik>
    )
}

export default ProfilePasswordTab
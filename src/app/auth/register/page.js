'use client'
import { RegistrationInitialValues, RegistrationValidationSchema } from "@/Components/Auth/RegistrationFormObjects";
import UserAddress from "@/Components/Auth/UserAddress";
import UserContact from "@/Components/Auth/UserContact";
import UserPersonalInfo from "@/Components/Auth/UserPersonalInfo";
import Btn from "@/Elements/Buttons/Btn";
import { store } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { YupObject } from "@/Utils/Validation/ValidationSchemas";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";

const VendorRegister = () => {
    
    const { t } = useTranslation( 'common');
    const { mutate, isLoading } = useCreate(store, false, `/auth/login`);
    return (
        <section className='log-in-section section-b-space'>
            <Container className='w-100'>
                <Row>
                    <Col xl={7}>
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3>{t("WelcomeToStore")}</h3>
                                <h4>{t("SetupYourStoreInformation")}</h4>
                            </div>
                            <div className="input-box">
                                <Formik
                                    initialValues={RegistrationInitialValues}
                                    validationSchema={YupObject({
                                        ...RegistrationValidationSchema,
                                    })}
                                    onSubmit={(values) => {
                                        values["status"] = 1;
                                        mutate(values);
                                    }}
                                >
                                    {({ values, errors }) => (
                                        <Form className="row g-4">
                                            <UserPersonalInfo />
                                            <UserAddress values={values} />
                                            <UserContact />
                                            <Col xs={12}>
                                                <Btn title="Submit" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" loading={Number(isLoading)} />
                                                <div className="sign-up-box">
                                                    <h4>{t("Alreadyhaveanaccount?")}? </h4>
                                                    <Link href={`/auth/login`}>{t("Login")}</Link>
                                                </div>
                                            </Col>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default VendorRegister;

import React, { useContext, useEffect, useState } from "react";
import { RiAddFill, RiDownload2Fill } from "react-icons/ri";
import { Card, CardBody, Col } from "reactstrap";
import Btn from "../../Elements/Buttons/Btn";
import SimpleInputField from "../InputFields/SimpleInputField";
import SettingContext from "../../Helper/SettingContext";
import ConfimationModal from "./ConfimationModal";
import { useTranslation } from "react-i18next";
import AccountContext from "@/Helper/AccountContext";

const SeleteWalletPrice = ({ values, creditLoader, debitLoader, handleSubmit, setIsValue, title, description, selectUser, icon, isCredit, isDebit, role ,setFieldValue }) => {
  
  const { t } = useTranslation( 'common');
  const { convertCurrency } = useContext(SettingContext);
  const [modal, setModal] = useState(false);
  const [creditOrDebit, setCreditOrDebit] = useState("");
  const { accountData } = useContext(AccountContext)

  useEffect(() => {
    setFieldValue("vendor_id",accountData?.vendor_wallet?.vendor_id)
  }, [accountData?.vendor_wallet?.vendor_id])
  return (
    <>
      <Col xxl={role !== "vendor" ? "8" : ""} xl={role !== "vendor" ? "7" : ""} sm={role == "vendor" ? "12" : ""}>
        <Card>
          <CardBody>
            <div className="title-header option-title">
              <div className="d-flex align-items-center">
                <h5>{title}</h5>
              </div>
            </div>
            <div className="wallet-sec theme-form">
              <div className="wallet-amount">
                <div className="wallet-icon">{icon}</div>
                <div>
                  <h2>{convertCurrency(values["showBalance"] || 0)}</h2>
                  <h5>{description}</h5>
                </div>
              </div>
              {role !== "vendor" && (
                <>
                  <SimpleInputField nameList={[{ name: "balance", placeholder: t("Add/WithdrawAmount"), notitle: "true", type: "number" }]} />
                  <div className="btn-sec">
                    {isCredit && (
                      <Btn
                      className={`btn btn-animation btn-primary btn-theme ${(!(values.consumer_id || values.vendor_id  ) || !values["balance"]) && "disabled"}`}
                        type="button"
                        title="Add"
                        onClick={() => {
                          setCreditOrDebit("credit");
                          setModal(true);
                        }}
                      >
                        <RiAddFill />
                      </Btn>
                    )}
                    {isDebit && (
                      <Btn
                        className="btn btn-outline btn-primary btn-theme"
                        disabled={!values[selectUser] ? true : !values["balance"] ? true : values["balance"] > values["showBalance"] ? true : false}
                        type="button"
                        title="Withdraw"
                        onClick={() => {
                          setCreditOrDebit("debit");
                          setModal(true);
                        }}
                      >
                        <RiDownload2Fill />
                      </Btn>
                    )}
                  </div>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </Col>
      <ConfimationModal modal={modal} setModal={setModal} creditOrDebit={creditOrDebit} setCreditOrDebit={setCreditOrDebit} handleSubmit={handleSubmit} setIsValue={setIsValue} creditLoader={creditLoader} debitLoader={debitLoader} />
    </>
  );
};

export default SeleteWalletPrice;

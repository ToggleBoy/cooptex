import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { RiArrowDownSLine, RiQuestionLine, RiUserLine } from "react-icons/ri";
import { Media } from "reactstrap";
import Avatar from "../../Components/CommonComponent/Avatar";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import AccountContext from "../../Helper/AccountContext";
import { LogoutAPI } from "../../Utils/AxiosUtils/API";
import useCreate from "../../Utils/Hooks/useCreate";

import { useTranslation } from "react-i18next";
import useOutsideDropdown from "@/Utils/Hooks/CustomHooks/useOutsideDropdown";

const ProfileNav = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const { t } = useTranslation( 'common');
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { accountData, accountContextData } = useContext(AccountContext);
  const isStateData = (accountContextData.image && Object?.keys(accountContextData.image).length > 0) || accountContextData.image == "";
  const { mutate, isLoading } = useCreate(LogoutAPI, false, false, "No", () => {
    Cookies.remove("uat");
    Cookies.remove("ue");
    Cookies.remove("account");
    localStorage.clear()
    router.push(`/auth/login`);
    setModal(false);
  });

  const handleLogout = () => {
    mutate({});
  };
  return (
    <>
      <li className="profile-nav onhover-dropdown pe-0 me-0">
        <Media className="profile-media" onClick={() => setIsComponentVisible((prev) => !prev)}>
          <Avatar data={isStateData ? accountContextData.image : accountData?.profile_image} name={accountData} customeClass={"rounded-circle"} />
          <Media body className="user-name-hide">
            <span>{accountContextData.name !== "" ? accountContextData.name : accountData?.name}</span>
            <p className="mb-0 font-roboto">
              {accountData ? accountData?.role?.name : t("Account")}
              <RiArrowDownSLine className="middle" />
            </p>
          </Media>
        </Media>
        <ul ref={ref} className={`profile-dropdown onhover-show-div ${isComponentVisible == "account" ? "active" : ""}`}>
          <li>
            <Link href={"/account"}>
              <RiUserLine />
              <span>{t("MyAccount")}</span>
            </Link>
          </li>
          <li>
            <a onClick={() => setModal(true)}>
              <FiLogOut />
              <span>{t("Logout")}</span>
            </a>
          </li>
        </ul>
      </li>
      <ShowModal
        open={modal}
        close={false}
        buttons={
          <>
            <Btn title="No" onClick={() => setModal(false)} className="btn--no btn-md fw-bold" />
            <Btn title="Yes" onClick={() => handleLogout()} className="btn-theme btn-md fw-bold" loading={Number(isLoading)} />
          </>
        }
      >
        <div className="remove-box">
          <RiQuestionLine className="icon-box wo-bg" />
          <h5 className="modal-title">{t("Confirmation")}</h5>
          <p>{t("Areyousureyouwanttoproceed?")} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default ProfileNav;

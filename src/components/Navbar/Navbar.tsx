import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import style from "./Navbar.module.css";
import Logo from "@icons/logo.png";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer} >
        <div className="image" style={{ width: 100 }}>
          <img src={Logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.navbarLinks}>
          <a href="#home" className={style.navbarLink}>
            {t("navbar.home")}
          </a>
          <a href="#about" className={style.navbarLink}>
            {t("navbar.about")}
          </a>
          <a href="#services" className={style.navbarLink}>
            {t("navbar.services")}
          </a>
          <a href="#contact" className={style.navbarLink}>
            {t("navbar.contact")}
          </a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;

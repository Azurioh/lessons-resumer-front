import Logo from '@icons/logo.png';
import { Pages } from '@src/enums/pages';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import style from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <div className="image" style={{ width: 100 }}>
          <img src={Logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.navbarLinks}>
          <a href={Pages.home} className={style.navbarLink}>
            {t('navbar.home')}
          </a>
          <a href={Pages.about} className={style.navbarLink}>
            {t('navbar.about')}
          </a>
          <a href={Pages.services} className={style.navbarLink}>
            {t('navbar.services')}
          </a>
          <a href={Pages.pricing} className={style.navbarLink}>
            {t('navbar.pricing')}
          </a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;

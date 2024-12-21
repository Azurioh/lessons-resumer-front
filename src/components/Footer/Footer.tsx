import { useTranslation } from 'react-i18next';
import style from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <p className={style.copyright}>
          © {new Date().getFullYear()} - {t('copyright')}
        </p>
        <div className={style.footerRow}>
          <a href="/faq">{t('footer.faq')}</a>
          <a href="/contact">{t('footer.contact')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

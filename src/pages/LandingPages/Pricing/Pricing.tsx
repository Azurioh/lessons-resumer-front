import Footer from '@src/components/Footer/Footer';
import Navbar from '@src/components/Navbar/Navbar';
import PricingCard from '@src/components/PricingCard/PricingCard';
import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Pricing.module.css';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const language = i18next.language;
  const [annualy, setAnnualy] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className={style.pricingContainer}>
        <h1 className={style.title}>{t('pricing.title')}</h1>
        <div className={style.pricingTypes}>
          <div className={style.pricingType + (!annualy ? ` ${style.active}` : '')} onClick={() => setAnnualy(false)}>
            <p>{t('pricing.type.monthly')}</p>
            <i>{t('pricing.noEngagement')}</i>
          </div>
          <div className={style.pricingType + (annualy ? ` ${style.active}` : '')} onClick={() => setAnnualy(true)}>
            <p>{t('pricing.type.annualy')}</p>
            <i>{t('pricing.freeMonths')}</i>
          </div>
          <div className={style.background + (annualy ? ` ${style.right}` : '')} />
        </div>
        <div className={style.pricingCards}>
          <PricingCard
            title="Gratuit"
            description="Offre gratuite pour tester les fonctionnalités de l'application"
            price={annualy ? 0 : 0}
            currency={t(`currencies.${language}`)}
            buttonTitle="Essayer"
            features={['Limite à 3 cours', 'Maximum de 5 pages par cours']}
            annualy={annualy}
          />
          <PricingCard
            title="Standard"
            description="Offre basique pour résumer des petits cours"
            price={annualy ? Number.parseFloat((2.49 * 10).toString().slice(0, 4)) : 2.49}
            currency={t(`currencies.${language}`)}
            buttonTitle="S'abonner"
            features={['Limite à 5 cours par jour', '10 pages maximum par cours']}
            annualy={annualy}
          />
          <PricingCard
            title="Premium"
            description="Offre premium pour résumer des gros cours"
            price={annualy ? Number.parseFloat((4.99 * 10).toString().slice(0, 4)) : 4.99}
            currency={t(`currencies.${language}`)}
            buttonTitle="S'abonner"
            features={['Nombre de cours par jour illimité', '100 pages maximum par cours']}
            annualy={annualy}
            pinned={true}
          />
          <PricingCard
            title="Groupe"
            description="Abonnement premium, mais à partager avec vos amis"
            price={annualy ? Number.parseFloat((9.99 * 10).toString().slice(0, 4)) : 9.99}
            currency={t(`currencies.${language}`)}
            buttonTitle="S'abonner"
            features={['Fonctionnalités premium', "Jusqu'à 4 comptes"]}
            annualy={annualy}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PricingPage;

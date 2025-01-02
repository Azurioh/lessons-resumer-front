import { CheckCircleOutlined } from '@ant-design/icons';
import style from './PricingCard.module.css';

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  currency: string;
  buttonTitle: string;
  features: string[];
  annualy: boolean;
  pinned?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, currency, buttonTitle, features, annualy, pinned }) => {
  return (
    <div className={style.pricingCard + (pinned ? ` ${style.pinned}` : '')}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={style.price}>
        <h3>
          {(currency === '€' && price.toString().replace('.', ',')) || price}
          {(annualy && price !== 0 && '0') || ''} {currency} {(price !== 0 && (annualy ? ' / an' : ' / mois')) || ''}
        </h3>
      </div>
      <button type="button">{buttonTitle}</button>
      <div className={style.features}>
        {features.map((feature, index) => (
          <div className={style.feature} key={index}>
            <CheckCircleOutlined />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;

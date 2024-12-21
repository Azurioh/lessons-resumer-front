import background from '@assets/background/login-background.jpg';
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Login.module.css';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
      document.title = t("login.title");
    }, [t]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.loginForm}>
          <h2>{t('login.title')}</h2>
          <Form className={style.inputs}>
            <Input
              className={style.input}
              type="email"
              placeholder={t('login.email')}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className={style.input}
              type="password"
              placeholder={t('login.password')}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={style.loginButton}>{t('login.submit')}</button>
            <a href="/register">{t('login.registerHidden')}</a>
          </Form>
        </div>
        <div className={style.register}>
          <h2>{t('login.notRegistered')}</h2>
          <p>{t('login.registerNow')}</p>
          <a href="/register">{t('login.register')}</a>
        </div>
      </div>
      <div className={style.color} />
      <img src={background} alt="background" className={style.background} />
    </div>
  );
};

export default LoginPage;

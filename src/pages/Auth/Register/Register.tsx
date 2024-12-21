import background from "@assets/background/login-background.jpg";
import { Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./Register.module.css";
import { Languages } from "@src/enums/languages";
import i18next from "i18next";

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [language, setLanguage] = React.useState<Languages>(i18next.language as Languages);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    document.title = t("register.title");
  }, [t]);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Languages);
    i18next.changeLanguage(value);
    localStorage.setItem('language', value);
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.registerForm}>
          <h2>{t("register.title")}</h2>
          <Form className={style.inputs}>
            <Select
              className={`${style.input} ${style.select}`}
              value={language}
              onChange={handleLanguageChange}
            >
              <Select.Option value={Languages.fr}>
                {t("languages.fr_FR")}
              </Select.Option>
              <Select.Option value={Languages.en}>
                {t("languages.en_US")}
              </Select.Option>
            </Select>
            <Input
              className={style.input}
              placeholder={t("register.username")}
              value={username}
              required={true}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className={style.input}
              placeholder={t("register.firstName")}
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              className={style.input}
              placeholder={t("register.lastName")}
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              className={style.input}
              type="email"
              placeholder={t("register.email")}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className={style.input}
              type="password"
              placeholder={t("register.password")}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{t("register.register")}</button>
            <a href="/login">{t('register.loginHidden')}</a>
          </Form>
        </div>
        <div className={style.login}>
          <h2>{t("register.alreadyRegister")}</h2>
          <p>{t("register.loginNow")}</p>
          <a href="/login">{t("register.login")}</a>
        </div>
      </div>
      <div className={style.color} />
      <img src={background} alt="background" className={style.background} />
    </div>
  );
};

export default RegisterPage;

import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Login.module.css";
import { Input } from "antd";
import background from "@assets/background/login-background.jpg";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.loginForm}>
          <h2>{t("login.title")}</h2>
          <div className={style.inputs}>
            <Input
              className={style.input}
              type="email"
              placeholder={t("login.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className={style.input}
              type="password"
              placeholder={t("login.password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{t("login.submit")}</button>
          </div>
        </div>
        <div className={style.register}>
          <h2>{t("login.notRegistered")}</h2>
          <p>{t("login.registerNow")}</p>
          <a href="/register">{t("login.register")}</a>
        </div>
      </div>
      <div className={style.color} />
      <img src={background} alt="background" className={style.background} />
    </div>
  );
};

export default LoginPage;

import type React from "react";
import { useTranslation } from "react-i18next";
import AboutImg from "@assets/landing_page/about.jpg";
import Navbar from "@src/components/Navbar/Navbar";
import style from "./Home.module.css";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>{t("home.title")}</h1>
          <p className={style.subtitle}>
            {t("home.subtitle")}
          </p>
          <div className={style.buttonContainer}>
            <a href="/register" className={style.button}>
              {t("home.try-it")}
            </a>
            <a href="/about" className={style.button}>
              {t("home.learn-more")}
            </a>
          </div>
        </div>
        <div className={style.aboutContainer}>
          <div className={style.aboutImg}>
            <img src={AboutImg} alt="about" />
          </div>
          <div className={style.aboutText}>
            <h2>{t("home.about.title")}</h2>
            <p>{t("home.about.description")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

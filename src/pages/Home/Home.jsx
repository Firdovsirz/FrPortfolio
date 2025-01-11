import React from 'react';
import styles from "./Home.module.scss";
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import Git from "../../assets/home/homeFeatures/github.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FirstImg from "../../assets/home/homeIntro/first-img.webp";
import ThirdImg from "../../assets/home/homeIntro/third-img.webp";
import SecondImg from "../../assets/home/homeIntro/second-img.webp";
import ModernWeb from "../../assets/home/homeFeatures/technology.png";
import ResponsiveDeisgn from "../../assets/home/homeFeatures/responsive-page.png";


export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <main className={styles['home-main']}>
                <section className={styles['home-intro-section']}>
                    <div className={styles['home-intro-section-container']}>
                        <h1>{t('home-intro-heading', { ns: 'home' })}</h1>
                        <p>
                            I craft modern, responsive, and user-friendly web experiences.
                            With a focus on clean code and seamless design.
                            Explore my work and let’s collaborate on bringing your next project to fruition!
                        </p>
                        <div className={styles['home-intro-call-btn']}>
                            <div className={styles['home-intro-call-btn-txt']}>
                                <p>{t('home-intro-schedule-call', { ns: 'home' })}</p>
                                <p>{t('home-intro-schedule-call', { ns: 'home' })}</p>
                            </div>
                            <div className={styles['home-intro-call-btn-icon']}>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                        <img src={FirstImg} alt="" className={styles['home-intro-img-first']} />
                        <img src={SecondImg} alt="" className={styles['home-intro-img-second']} />
                        <img src={ThirdImg} alt="" className={styles['home-intro-img-third']} />
                    </div>
                </section>
                <section className={styles['home-features-section']}>
                    <div className={styles['home-features-container']}>
                        <h2>{t('home-features-heading', { ns: 'home' })}</h2>
                        <p>{t('home-features-desc', { ns: 'home' })}</p>
                        <div className={styles['home-fet-box-container']}>
                            <div>
                                <img src={ResponsiveDeisgn} alt="responsive-design" />
                                <h3>Responsive Design</h3>
                                <p>{t('home-feature-reponse-desc', { ns: 'home' })}</p>
                            </div>
                            <div>
                                <img src={ModernWeb} alt="modern-web-technologies" />
                                <h3>{t('home-feature-modern-web', { ns: 'home' })}</h3>
                                <p>{t('home-feature-modern-web-desc', {ns: 'home'})}</p>
                            </div>
                            <div>
                                <img src={Git} alt="github" />
                                <h3>{t('home-feature-git', {ns: 'home'})}</h3>
                                <p>{t('home-feature-git-desc', {ns: 'home'})}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

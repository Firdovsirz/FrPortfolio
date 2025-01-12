import React from 'react';
import styles from "./Home.module.scss";
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DevicesIcon from '@mui/icons-material/Devices';
import JS from "../../assets/home/homeServices/js.webp";
import Git from "../../assets/home/homeServices/git.png";
import Sass from "../../assets/home/homeServices/sass.png";
import Figma from "../../assets/home/homeServices/figma.png";
import GitHub from "../../assets/home/homeServices/github.svg";
import GitLab from "../../assets/home/homeServices/gitlab.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReactJs from "../../assets/home/homeServices/reactjs.png";
import FirstImg from "../../assets/home/homeIntro/first-img.webp";
import ThirdImg from "../../assets/home/homeIntro/third-img.webp";
import Response from "../../assets/home/homeServices/response.avif";
import SecondImg from "../../assets/home/homeIntro/second-img.webp";
import ModernWeb from "../../assets/home/homeFeatures/technology.png";
import Development from "../../assets/home/homeServices/development.avif";
import Additional1 from "../../assets/home/homeServices/additional-1.webp";
import Additional2 from "../../assets/home/homeServices/additional-2.webp";
import ResponsiveDesign from "../../assets/home/homeFeatures/responsive-page.png";


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
                                <img src={ResponsiveDesign} alt="responsive-design" />
                                <h3>Responsive Design</h3>
                                <p>{t('home-feature-reponse-desc', { ns: 'home' })}</p>
                            </div>
                            <div>
                                <img src={ModernWeb} alt="modern-web-technologies" />
                                <h3>{t('home-feature-modern-web', { ns: 'home' })}</h3>
                                <p>{t('home-feature-modern-web-desc', { ns: 'home' })}</p>
                            </div>
                            <div>
                                <img src={Git} alt="github" />
                                <h3>{t('home-feature-git', { ns: 'home' })}</h3>
                                <p>{t('home-feature-git-desc', { ns: 'home' })}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['home-services-section']}>
                    <div className={styles['home-services-container']}>
                        <div className={styles['home-services-txt']}>
                            <h2>Professional Services That Showcase My Expertise.</h2>
                            <p>From creative design to technical solutions, my services define industry excellence.</p>
                        </div>
                        <div className={styles['home-services-bx']}>
                            <div className={styles['home-services-devp-container']}>
                                <div className={styles['home-services-dev-main']}>
                                    <img src={Development} alt="development" />
                                    <h2>Website or web service development</h2>
                                    <p>
                                        We develop beautiful design and user-friendly
                                        interfaces for websites.
                                    </p>
                                </div>
                                <div className={styles['home-services-dev-tool']}>
                                    <div>
                                        <img src={JS} alt="js" />
                                    </div>
                                    <div>
                                        <img src={ReactJs} alt="react-js" />
                                    </div>
                                    <div>
                                        <img src={Sass} alt="sass" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles['home-services-ui-git']}>
                                <div className={styles['home-services-ui']}>
                                    <div className={styles['home-services-ui-containter']}>
                                        <h2>UI/UX Design Implementation</h2>
                                        <p>
                                            Translating designs from Figma into functional web interfaces.
                                        </p>
                                        <div className={styles['home-serv-ui-icons']}>
                                            <div>
                                                <img src={Figma} alt="figma" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['home-services-git']}>
                                    <div className={styles['home-services-git-txt']}>
                                        <h2>Version Control and Collaboration</h2>
                                        <p>
                                            Working with version control systems like Git and platforms
                                            like GitHub or GitLab.
                                        </p>
                                    </div>
                                    <div className={styles['home-services-git-icon']}>
                                        <div>
                                            <img src={GitHub} alt="github" />
                                        </div>
                                        <div>
                                            <img src={GitLab} alt="gitlab" />
                                        </div>
                                        <div>
                                            <img src={Git} alt="git" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['home-services-reponse']}>
                                <div className={styles['home-services-response-container']}>
                                    <img src={Response} alt="response-design" />
                                    <h2>Reponsive Web Design</h2>
                                    <p>
                                        Creating websites that look great and work
                                        seamlessly on any device (mobile, tablet, desktop).
                                    </p>
                                    <div className={styles['home-services-response-icon-container']}>
                                        <DevicesIcon className={styles['home-services-reponse-icon']} />
                                    </div>
                                </div>
                                <div className={styles['home-services-api']}>
                                    <div className={styles['home-services-api-container']}>
                                        <h2>API Integration</h2>
                                        <p>
                                            Integrating REST or GraphQL APIs with frontend applications.
                                            Dynamic data rendering and state management.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['home-services-additional-info']}>
                        <img src={Additional1} alt="" />
                        <img src={Additional2} alt="" />
                        <h2>
                            Since 2010, we have been creating projects
                            that remain relevant today, tomorrow, and
                            for decades to come
                        </h2>
                    </div>
                </section>
            </main>
            <Footer bg={"rgb(245, 244, 246)"}/>
        </>
    )
}

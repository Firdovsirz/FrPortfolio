import React from 'react';
import styles from "./Footer.module.scss";
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer({bg}) {
    const { t } = useTranslation();
    return (
        <footer style={{background: `${bg}`}}>
            <div className={styles['footer-container']}>
                <div className={styles['footer-main']}>
                    <div className={styles['footer-info']}>
                        <div className={styles['footer-info-logo']}>
                            FR
                        </div>
                        <p>
                            Get in touch to find out more about digital experiences to
                            effectively reach and engage customers and target audiences.
                        </p>
                    </div>
                    <div className={styles['footer-quick-links']}>
                        <h2>Quick Links</h2>
                        <ul>
                            <li>{t('header-home', { ns: "header" })}</li>
                            <li>{t('header-works', { ns: "header" })}</li>
                            <li>{t('header-about', { ns: "header" })}</li>
                            <li>{t('header-contact', { ns: "header" })}</li>
                        </ul>
                    </div>
                    <div className={styles['footer-social-media']}>
                        <h2>Social Media</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <InstagramIcon className={styles['footer-social-media-icon']} />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <LinkedInIcon className={styles['footer-social-media-icon']} />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <GitHubIcon className={styles['footer-social-media-icon']} />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TelegramIcon className={styles['footer-social-media-icon']} />
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles['footer-copyright']}>
                    <div className={styles['footer-copyright-container']}>
                        <CopyrightIcon style={{ color: "#fff", fontSize: 25, marginRight: 20 }} />
                        <p>Created by Firdovsi Rzaev</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

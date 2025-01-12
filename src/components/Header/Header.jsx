import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss";
import { useTranslation } from 'react-i18next';
import DownloadIcon from '@mui/icons-material/Download';
import LanguageChanger from '../LanguageChanger/LanguageChanger';

export default function Header() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header>
            <nav style={
                isScrolled ? {
                    background: "rgba(26, 26, 26, 0.5)",
                    backdropFilter: "blur(10px)",
                    width: "fit-content",
                    transition: 'all 800ms',
                    borderRadius: 20
                } : { width: "95%" }
            }>
                <div className={styles['header-logo-container']}>
                    FR
                </div>
                <div className={styles['header-links']}>
                    <ul className={styles['header-link-list']} >
                        <div className={styles['header-link-container']} style={isScrolled ? { background: "#000", padding: "5px 10px", borderRadius: 10 } : null}>
                            <li style={isScrolled ? { color: "#fff" } : null}>
                                {t('header-home', { ns: "header" })}
                            </li>
                            <li style={isScrolled ? { color: "#fff" } : null}>
                                {t('header-works', { ns: "header" })}
                            </li>
                            <li style={isScrolled ? { color: "#fff" } : null}>
                                {t('header-about', { ns: "header" })}
                            </li>
                            <li style={isScrolled ? { color: "#fff" } : null}>
                                {t('header-contact', { ns: "header" })}
                            </li>
                        </div>
                        <li style={isScrolled ? { color: "#fff" } : null}>
                            <LanguageChanger />
                        </li>
                        <li>
                            <div style={isScrolled ? { background: "#fff", height: 60 } : null}>
                                <p style={isScrolled ? { color: "#000" } : null}>
                                    {t('header-download-resume', { ns: "header" })}
                                    <DownloadIcon style={{ marginLeft: 10 }} />
                                </p>
                                <p style={isScrolled ? { color: "#000" } : null}>
                                    {t('header-download-resume', { ns: "header" })}
                                    <DownloadIcon style={{ marginLeft: 10 }} />
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

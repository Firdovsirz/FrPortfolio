import i18n from '../../language/i18n';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./LanguageChanger.module.scss";
import EnFlag from "../../assets/language/uk-flag.png";
import RuFlag from "../../assets/language/ru-flag.png";
import AzFlag from "../../assets/language/az-flag.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LanguageChanger() {
    const [avalList, setAvalList] = useState(false);
    const [currentLang, setCurrentLang] = useState('En');
    const [currentFlag, setCurrentFlag] = useState(EnFlag);
    const { t, i18n } = useTranslation();
    const handleAvalList = () => {
        setAvalList(!avalList);
    }

    const handleLangChange = (e) => {
        setAvalList(false);
        setCurrentLang(e);
        if (e === 'En') {
            setCurrentFlag(EnFlag);
            i18n.changeLanguage('en');
            console.log(e);
        } else if (e === 'Ru') {
            setCurrentFlag(RuFlag);
            i18n.changeLanguage('ru');
            console.log(e);
        } else if (e === 'Az') {
            setCurrentFlag(AzFlag);
            i18n.changeLanguage('az');
            console.log(e);

        }
    }
    const availableLanguages = [
        currentLang === 'En' ? null : 'En',
        currentLang === 'Az' ? null : 'Az',
        currentLang === 'Ru' ? null : 'Ru'
    ];
    const availableFlags = [
        currentLang === 'En' ? null : EnFlag,
        currentLang === 'Az' ? null : AzFlag,
        currentLang === 'Ru' ? null : RuFlag
    ];
    return (
        <div className={styles['language-changer-container']}>
            <div className={styles['lang-ch-main-container']}>
                <div className={styles['current-lang-container']} onClick={handleAvalList}>
                    <img src={currentFlag} alt="current-language-flag" />
                    <ArrowDropDownIcon className={styles['cr-lang-dropdown-icon']} />
                </div>
                <div className={styles['available-lang-list-container']} style={
                    avalList ? {
                        opacity: 1,
                        visibility: "visible",
                        marginTop: 0,
                        transition: "all 400ms"
                    } : {
                        opacity: 0,
                        visibility: "hidden",
                        marginTop: "-20px",
                        transition: "all 400ms"
                    }
                }>
                    <ul className={styles['aval-lang-list']}>
                        {availableLanguages.map((item, index) => {
                            if (item != null) {
                                return (
                                    <li key={index} onClick={() => handleLangChange(item)}>
                                        <img src={availableFlags[index]} alt="available-language-flag" />
                                        <p>{item}</p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

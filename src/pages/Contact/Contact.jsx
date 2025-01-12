import React, {useState} from 'react';
import styles from "./Contact.module.scss";
import CallIcon from '@mui/icons-material/Call';
import ForumIcon from '@mui/icons-material/Forum';
import RocketIcon from '@mui/icons-material/Rocket';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
    const [text, setText] = useState('Message...');
    const handleTextArea = (e) => {
        setText(e.target.value);
    } 
    return (
        <>
            <Header />
            <main className={styles['contact-main']}>
                <section className={styles['contact-intro-section']}>
                    <div className={styles['contact-intro-container']}>
                        <p>FR CONTACT</p>
                        <h1>Get in touch with me today!</h1>
                        <p>Contact with me to get Frontend services.</p>
                    </div>
                </section>
                <section className={styles['contact-details-section']}>
                    <div className={styles['contact-details-container']}>
                        <div className={styles['contact-details-phone']}>
                            <div className={styles['contact-detail-message']}>
                                <div className={styles['contact-detail-message-bg']}>
                                    <div className={styles['contact-detial-message-main-container']}>
                                        <div className={styles['contact-detail-message-main']}>
                                            <ForumIcon className={styles['contact-detail-icon']} />
                                            <div className={styles['contact-detail-message-txt']}>
                                                <h2>Message Me</h2>
                                                <p>Message me, and you will be replied within 24 hours.</p>
                                            </div>
                                        </div>
                                        <div className={styles['contact-detail-message-email']}>
                                            <a href="mailto:firdovsirz@gmail.com">firdovsirz@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['contact-detail-call']}>
                                <div className={styles['contact-detail-call-bg']}>
                                    <div className={styles['contact-detial-call-main-container']}>
                                        <div className={styles['contact-detail-call-main']}>
                                            <CallIcon className={styles['contact-detail-icon']} />
                                            <div className={styles['contact-detail-call-txt']}>
                                                <h2>Call Me</h2>
                                                <p>
                                                    Feel free to call me for any inquiries or
                                                    assistance—I’m here to help!
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles['contact-detail-call-number']}>
                                            <a href="tel:+994554511870">+994-55-451-18-70</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['contact-detail-telegram']}>
                                <div className={styles['contact-detail-telegram-bg']}>
                                    <div className={styles['contact-detail-telegram-main-container']}>
                                        <div className={styles['contact-detail-telegram-main']}>
                                            <LocationOnIcon className={styles['contact-detail-icon']} />
                                            <div className={styles['contact-detail-telegram-txt']}>
                                                <h2>Telegram</h2>
                                                <p>Message me via Telegram</p>
                                            </div>
                                        </div>
                                        <div className={styles['contact-detail-telegram-username']}>
                                            <a href="tg:https://t.me/firdovsirz">@firdovsirz</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['contact-details-form']}>
                            <div className={styles['contact-details-form-bg']}>
                                <div className={styles['contact-details-form-main-container']}>
                                    <div className={styles['contact-details-form-container-txt']}>
                                        <RocketIcon style={{ color: "rgb(126, 126, 126)", fontSize: 40, marginBottom: 50 }} />
                                        <h2>Feel free to send me a message!</h2>
                                        <p>You can get 7/24 support by messaging me.</p>
                                    </div>
                                    <div className={styles['contact-details-form-container']}>
                                        <form action="">
                                            <div className={styles['contact-form-name-label-container']}>
                                                <input type="text" required />
                                                <div className={styles['contact-form-name-placeholder']}>Full Name</div>
                                            </div>
                                            <div className={styles['contact-form-email-label-container']}>
                                                <input type="email" required />
                                                <div className={styles['contact-form-email-placeholder']}>Name</div>
                                            </div>
                                            <div className={styles['contact-form-textarea-container']}>
                                                <textarea name="Message" value={text} onChange={handleTextArea}>
                                                </textarea>
                                            </div>
                                            <div className={styles['contact-form-btn-container']}>
                                                <button className={styles['contact-form-sbmt-btn']}>
                                                    <p>Submit</p>
                                                    <p>Submit</p>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer bg={"#fff"} />
        </>
    )
}

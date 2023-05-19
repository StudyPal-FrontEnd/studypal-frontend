import React from "react";
import { Link, useNavigate } from "react-router-dom";
import brandImg from "../../../../assets/images/svg/brand.svg"
import banner from "../../../../assets/images/svg/banner.svg"
import styles from '../../styles/LandingPage.module.css';




const LandingPage = () => {
    const navigate = useNavigate(); 
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.navBrand}>
                    <img className={styles.brand} src={brandImg} alt="brand" />
                </div>
                <div className={styles.nav}>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Offer</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.article}>
                    <h3>StudyPal help organize, schedule and track studying activities and aid learning capacity.</h3>
                    <button className={styles.pageButton} onClick={() => navigate('/login')}>Get Started</button>
                </div>
                <div className={styles.aside}>
                <img className={styles.banner} src={banner} alt="banner" />
                </div>

            </div>

                

        </div>

    )
}

export default LandingPage;
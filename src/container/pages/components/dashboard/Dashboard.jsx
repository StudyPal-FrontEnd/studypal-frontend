import React from "react";
import styles from '../../styles/Dashboard.module.css';
import { Link } from "react-router-dom";
import brandImg from "../../../../assets/images/svg/brand.svg";

const Dashboard = () => {
    
    return(
        <div className={styles.container}>
            <div className={styles.aside}>
                <div className={styles.navBrand}>
                    <img className={styles.brand} src={brandImg} alt="brand" />
                </div>
                <div className={styles.navBars}>
                    <div className={styles.nav}>
                        <ul>
                        <li ><Link to="/">Home</Link></li>
                        <li><Link to="/">Study Plan</Link></li>
                        <li><Link to="/">Note</Link></li>
                        <li><Link to="/">Resource Materials</Link></li>
                        </ul>
                    </div>
                </div>
               
                <div className={styles.footer}>
                <hr />
                    <div className={styles.userProfile}><Link>Account</Link></div>
                    <div className={styles.logout}><Link>Logout</Link></div>
                </div>
                
            </div>
            <div className={styles.homePage}>
                <div className={styles.homePageBar}>

                </div>
            </div>
           


        </div>
    )
}

export default Dashboard;
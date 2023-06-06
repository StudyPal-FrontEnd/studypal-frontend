import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import brandImg from "../../../../assets/images/svg/brand.svg";
// import brand from "../../../../assets/images/png/"

const SideSection = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.navBrand}>
        <img className={styles.brand} src={brandImg} alt="brand" />
      </div>
      <div className={styles.navBars}>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link className={styles.link} to="/dashboard">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/studyplan">
                Study Plan
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/notes">
                Note
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/resourcematerials">
                Resource Materials
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <hr />
        <ul className={styles.footerContainer}>
          <li className={styles.userProfile}>
            <Link className={styles.link}>Account</Link>
          </li>
          <li className={styles.logout}>
            <Link className={styles.link} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSection;

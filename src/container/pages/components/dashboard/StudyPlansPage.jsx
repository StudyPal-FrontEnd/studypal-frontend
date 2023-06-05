import React, { useState, useContext } from "react";
import styles from "../../styles/Dashboard.module.css";
import style from "../../styles/ViewAllPages.module.css";
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import SideSection from "./SideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StudyPlanContext from "../../Contexts/StudyPlanContext";

const StudyPlansPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const { title, description, purpose } = useContext(StudyPlanContext);
  const { studyPlans } = useContext(StudyPlanContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      <SideSection />

      <div className={styles.homePage}>
        <div className={styles.homePageBar}>
          <div className={styles.searchBar}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e)}
              name="search"
              id="search"
              placeholder="Search Anything..."
            />
            <button className={styles.searchButton}>Search</button>
          </div>

          <div className={styles.profile}>
            <div className={styles.imgBorder}>
              <img
                className={styles.profileImg}
                src={ProfileImg}
                alt="Profile Ima"
              />
            </div>

            <div className={styles.profileName}>Martins Jonathan</div>
          </div>
        </div>
        <div className={style.createdPlans}>
          <div className={style.pageTitle}>
            <h4>Study Plans</h4>
            <Link to="/studyplan/create">
              <button className={style.addStudyPlan}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Link>
          </div>
          <div className={style.allStudyPlans}>
            {studyPlans.map((studyPlan, index) => (
              <div className={style.plans} key={index}>
                <h4>Title: {studyPlan.title}</h4>
                <p>Description: {studyPlan.description}</p>
                <ul>
                  {studyPlan.schedules.map((schedule, index) => (
                    <li key={index}>
                      <h5>Purpose: {schedule.purpose}</h5>
                      <p>Start Date And Time: {schedule.startDateTime}</p>
                      <p>End Date And Time: {schedule.endDateTime}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* <div className={style.plans}>
              <h4>Title: { title }</h4>
              <p>Description: { description}</p>
              <h5>Purpose: { purpose }</h5>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlansPage;

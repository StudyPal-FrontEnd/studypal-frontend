import { useState } from "react";
import styles from '../../styles/Dashboard.module.css';
import style from '../../styles/ViewAllPages.module.css';
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import SideSection from "./SideSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import CreateStudyPlan from "./CreateStudyPlan";
// import CreateStudyPlan from "./CreateStudyPlan";

const StudyPlansPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [studyPlans, setStudyPlans] = useState([]);

  const addStudyPlan = (studyPlan) => {
    setStudyPlans((prevStudyPlans) => [...prevStudyPlans, studyPlan]);
  };
  

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
              <img className={styles.profileImg} src={ProfileImg} alt="Profile Ima" />
            </div>

            <div className={styles.profileName}>Martins Jonathan</div>
          </div>
        </div>
        <div className={style.createdPlans}>
          <div className={style.pageTitle}>
            <h4>Study Plans</h4>
            <Link to="/createstudyplan">
              <button className={style.addStudyPlan}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Link>
          </div>

          <CreateStudyPlan addStudyPlan={addStudyPlan} />
          {studyPlans && (
            <div>
              <p>Title: {studyPlans.title}</p>
              <p>Description: {studyPlans.description}</p>
              {studyPlans.schedules.map((schedule, index) => (
                <div key={index}>
                  <h4>Purpose: {schedule.purpose}</h4>
                  <p>Start Date: {schedule.startDate}</p>
                  <p>Start Time: {schedule.startTime}</p>
                  <p>End Date: {schedule.endDate}</p>
                  <p>End Time: {schedule.endTime}</p>
                </div>
          ))}
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyPlansPage;

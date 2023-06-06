import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "../../styles/Dashboard.module.css";
import style from "../../styles/ViewAllPages.module.css";
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import SideSection from "./SideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StudyPlanContext from "../../Contexts/StudyPlanContext";

const StudyPlansPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { studyPlans, deleteStudyPlan } = useContext(StudyPlanContext);
  const [deleteIndices, setDeleteIndices] = useState([]);
  const [recentStudyPlans, setRecentStudyPlans] = useState([]);
  const studyPlanRefs = useRef([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const sortedStudyPlans = studyPlans.slice(0, studyPlans.length).reverse();
    setRecentStudyPlans(sortedStudyPlans);
  }, [studyPlans]);

  const confirmDelete = (index) => {
    deleteStudyPlan(index);
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
            {recentStudyPlans.map((studyPlan, index) => (
              <div key={index}>
                <div
                  className={style.studyplan}
                  key={index}
                  ref={(ref) => (studyPlanRefs.current[index] = ref)}
                  onMouseEnter={() => setDeleteIndices(index)}
                  onMouseLeave={() => setDeleteIndices(null)}
                  onClick={() => confirmDelete(index)}
                >
                  <h4>Title: {studyPlan.title}</h4>
                  <p className={styles.lineClamp}>
                    Description: {studyPlan.description}
                  </p>
                  <p>
                    You have <strong>{studyPlan.schedules.length} </strong>
                    {studyPlan.schedules.length === 1
                      ? "Schedule"
                      : "Schedules"}{" "}
                    for this Study plan
                  </p>
                  {deleteIndices === index && (
                    <div className={style.deleteIcon}>
                      <FontAwesomeIcon icon={faAsterisk} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlansPage;

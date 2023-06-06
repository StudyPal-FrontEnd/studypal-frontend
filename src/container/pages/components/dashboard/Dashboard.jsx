import { useContext, useState, useEffect, useRef } from "react";
import styles from "../../styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faPlus } from "@fortawesome/free-solid-svg-icons";
import SideSection from "./SideSection";
import StudyPlanContext from "../../Contexts/StudyPlanContext";

const Dashboard = ({ fullName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { studyPlans } = useContext(StudyPlanContext);
  const [recentStudyPlans, setRecentStudyPlans] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const studyPlanRefs = useRef([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const sortedStudyPlans = studyPlans.slice(0, studyPlans.length).reverse();
    setRecentStudyPlans(sortedStudyPlans);
  }, [studyPlans]);

  const mostRecentStudyPlans = recentStudyPlans.slice(0, 4);

  const confirmDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this study plan?")) {
      const updatedStudyPlans = [...recentStudyPlans];
      updatedStudyPlans.slice(index, 1);
      setRecentStudyPlans(updatedStudyPlans);
    }
  };

  return (
    <div className={styles.container}>
      <SideSection />

      <div className={styles.homePage}>
        <div cla ssName={styles.homePageBar}>
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
            <div className={styles.profileName}>{fullName}</div>
          </div>
        </div>
        <div className={styles.homeSection}>
          <div className={styles.section}>
            <div className={styles.titleBar}>
              <h3>Study Plans</h3>
              <Link to="/studyplan">
                <button className={styles.moreButton}>more</button>
              </Link>
            </div>
            <div className={styles.createSection}>
              <Link to="/studyplan/create">
                <button className={styles.addButton}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
              <div className={styles.allStudyPlans}>
                {mostRecentStudyPlans.map((studyPlan, index) => (
                  <div
                    className={styles.studyPlan}
                    key={index}
                    ref={(ref) => (studyPlanRefs.current[index] = ref)}
                    onMouseEnter={() => setDeleteIndex(index)}
                    onMouseLeave={() => setDeleteIndex(null)}
                    onClick={() => confirmDelete(index)}
                  >
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
                    {deleteIndex === index && (
                      <div className={styles.deleteIcon}>
                        <FontAwesomeIcon icon={faAsterisk} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.titleBar}>
              <h3>Notes</h3>
              <Link to="/notes">
                <button className={styles.moreButton}>more</button>
              </Link>
            </div>
            <div className={styles.createSection}>
              <Link to="">
                <button className={styles.addButton}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.titleBar}>
              <h3>Resource Materials</h3>
              <Link to="resourcematerials">
                <button className={styles.moreButton}>more</button>
              </Link>
            </div>
            <div className={styles.createSection}>
              <Link to="">
                <button className={styles.addButton}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

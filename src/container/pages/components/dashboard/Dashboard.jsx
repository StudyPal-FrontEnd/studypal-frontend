import { useContext, useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import { Icon } from "@iconify/react";
import SideSection from "./SideSection";
import StudyPlanContext from "../../Contexts/StudyPlanContext";
import UserContext from "../../Contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const [searchTerm, setSearchTerm] = useState("");
  const { studyPlans } = useContext(StudyPlanContext);
  const [recentStudyPlans, setRecentStudyPlans] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const sortedStudyPlans = studyPlans.slice(0, studyPlans.length).reverse();
    setRecentStudyPlans(sortedStudyPlans);
  }, [studyPlans]);

  const mostRecentStudyPlans = recentStudyPlans.slice(0, 4);
  console.log(user);

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
            <div className={styles.profileName}>{user.firstName}</div>
          </div>
        </div>
        <div className={styles.homeSection}>
          <div className={styles.section}>
            <div className={styles.titleBar}>
              <h3>Study Plans</h3>
              {studyPlans.length > 0 && (
                <Link to="/studyplan">
                  <button className={styles.moreButton}>more</button>
                </Link>
              )}
            </div>
            <div className={styles.createSection}>
              <Link to="/studyplan/create">
                <button className={styles.addButton}>
                  <Icon
                    icon="mdi:file-plus"
                    color="white"
                    className={styles.customIcon}
                  />
                </button>
              </Link>
              <div className={styles.allStudyPlans}>
                {mostRecentStudyPlans.map((studyPlan, index) => (
                  <div className={styles.studyPlan} key={index}>
                    <div className={styles.studyContent}>
                      <h4>Title: {studyPlan.title}</h4>
                      <p className={styles.lineClamp}>
                        Description: {studyPlan.description}
                      </p>
                    </div>

                    <p className={styles.schedules}>
                      You have <strong>{studyPlan.schedules.length} </strong>
                      {studyPlan.schedules.length === 1
                        ? "Schedule"
                        : "Schedules"}{" "}
                      for this Study plan
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.titleBar}>
              <h3>Notes</h3>
              <Link to="/notes">
                {/* <button className={styles.moreButton}>more</button> */}
              </Link>
            </div>
            <div className={styles.createSection}>
              <Link to="/createnotes">
                <button className={styles.addButton}>
                  <Icon
                    icon="emojione-v1:spiral-notepad"
                    color="white"
                    className={styles.customIcon}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.titleBar}>
              <h3>Resource Materials</h3>
              <Link to="resourcematerials">
                {/* <button className={styles.moreButton}>more</button> */}
              </Link>
            </div>
            <div className={styles.createSection}>
              <Link to="">
                <button className={styles.addButton}>
                  <Icon
                    icon="mdi:semantic-web"
                    color="white"
                    className={styles.customIcon}
                  />
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

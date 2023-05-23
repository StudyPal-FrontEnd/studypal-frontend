import {useState} from "react";
import styles from '../../styles/Dashboard.module.css';
import { Link } from "react-router-dom";
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SideSection from "./SideSection";



const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
       
        setSearchTerm(e.target.value);
    }
    return(
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
                            placeholder='Search Anything...'
                        />
                        <button className={styles.searchButton} >Search</button>
                            
                    </div>
                    
                    <div className={styles.profile}>
                        <div className={styles.imgBorder}>
                        <img className={styles.profileImg} src={ProfileImg} alt="Profile Ima"/>
                        </div>
                        
                        <div className={styles.profileName}>Martins Jonathan</div>
                    </div>
                </div>
                <div className={styles.homeSection}>
                    <div className={styles.section}>
                        <div className={styles.titleBar}>
                            <h3>Study Plans</h3>
                            <Link to="/studyplans"><button className={styles.moreButton}>more</button></Link>
                        </div>
                        <div className={styles.createSection}>
                            <Link to="/createstudyplan"><button className={styles.addButton}><FontAwesomeIcon icon={faPlus} /></button></Link>
                        </div>

                    </div>
                    <div className={styles.section}>
                        <div className={styles.titleBar}>
                            <h3>Notes</h3>
                            <Link to="/notes"><button className={styles.moreButton}>more</button></Link>
                        </div>
                        <div className={styles.createSection}>
                            <Link to="/createstudyplan"><button className={styles.addButton}><FontAwesomeIcon icon={faPlus} /></button></Link>
                        </div>

                    </div>
                    <div className={styles.section}>
                        <div className={styles.titleBar}>
                            <h3>Resource Materials</h3>
                            <Link to="/resourcematerials"><button className={styles.moreButton}>more</button></Link>
                        </div>
                        <div className={styles.createSection}>
                            <Link to="/createstudyplan"><button className={styles.addButton}><FontAwesomeIcon icon={faPlus} /></button></Link>
                        </div>

                    </div>
                
            </div>
            </div>
        </div>
    )
}

export default Dashboard;
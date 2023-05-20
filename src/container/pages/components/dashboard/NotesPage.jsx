import {useState} from "react";
import styles from '../../styles/Dashboard.module.css';
import ProfileImg from "../../../../assets/images/svg/profileImg.svg";
import SideSection from "./SideSection";



const NotesPage = () => {
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
            </div>
        </div>
    )
}

export default NotesPage;
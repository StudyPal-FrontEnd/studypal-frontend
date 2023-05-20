import {useState} from "react";
import styles from '../../styles/Dashboard.module.css';
import style from '../../styles/StudyPlan.module.css';
import SideSection from "./SideSection";
import StudyPlanForm from "./StudyPlanForm";



const CreateStudyPlan = () => {
 
    return(
        <div className={styles.container}>
            
            <SideSection />
            <div className={style.studyPlanSection}>
                <StudyPlanForm className={style.formPage} />
                <div className={styles.viewSchedules}>

                </div>
                
            </div>
                

            </div>
          
    )
}

export default CreateStudyPlan;
import {useState} from "react";
import styles from '../../styles/Dashboard.module.css';
import style from '../../styles/StudyPlan.module.css';
import ScheduleForm from "./ScheduleForm";



const StudyPlanForm = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange= (e) => {
        setDescription(e.target.value);
    }
   
    return(
        <div className={styles.studyPlanForm}>
            <form className={styles.formsection}>
                <input type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e)}
                    name="title" id="title"
                    placeholder="Title:"
                /> <br />
                <textarea type="text"
                    value={description}
                    onChange={(e) => handleDescriptionChange(e)}
                    rows="15" cols="50"
                    name="description" id="description"
                    placeholder="Description:">
                </textarea> <br />
                <ScheduleForm />
                <div className={styles.formButton}>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </form>
            
                
          
            

            </div>
    )
}

export default StudyPlanForm;
import {useState} from "react";
import styles from '../../styles/Dashboard.module.css';
import style from '../../styles/StudyPlan.module.css';
import SideSection from "./SideSection";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CreateStudyPlan = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [purpose, setPurpose] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [schedules, setSchedules] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange= (e) => {
        setDescription(e.target.value);
    }


    const handlePurposeChange = (e) => {
        setPurpose(e.target.value);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    }


    const handleAddschedule = (e) => {
        e.preventDefault();
        const newSchedule = {
            purpose: purpose,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime,
        };
        setSchedules([...schedules, newSchedule]);
    }

 
    return(
        <div className={styles.container}> 
            <SideSection />
            <div className={style.createPlanSection}>
                <div className={style.createPlan}>
                    <div className={style.studyBar}>
                        <h3>Create Study Plan</h3>
                    </div>
                    <div className={style.studyPlanForm}>
                    <form className={style.formSection}>
                        <input className={style.titleForm} type="text"
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
                        <div className={style.addScheduleForm}>
                            <h4>Add Schedule: </h4>
                            <input className={style.titleForm} type="text"
                                value={purpose}
                                onChange={(e) => handlePurposeChange(e)}
                                name="purpose" id="purpose"
                                placeholder="Purpose:"
                            /> 

                            <div className={style.startSection}>
                                <div className={style.formDateTime}>
                                    <div>
                                        <label htmlFor="startDate">Start Date:</label>
                                    </div>
                                    <input type="Date"
                                        value={startDate}
                                        onChange={(e) => handleStartDateChange(e)}
                                        name="startDate" id="startDate"
                                    /> 
                                </div>
                                <div className={style.formDateTime}>
                                    <div>
                                        <label htmlFor="startTime">Start Time:</label>
                                    </div>
                                    <input type="time"
                                        value={startTime}
                                        onChange={(e) => handleStartTimeChange(e)}
                                        name="startTime" id="startTime"     
                                    />
                                </div>        
                                    
                            </div>  

                            <div className={style.startSection}>
                                <div className={style.formDateTime}>
                                    <div>
                                        <label htmlFor="endDate">End Date:</label>
                                    </div>
                                    <input type="Date"
                                        value={endDate}
                                        onChange={(e) => handleEndDateChange(e)}
                                        name="endDate" id="endDate"
                                    /> 
                                </div>
                                <div className={style.formDateTime}>
                                    <div>
                                        <label htmlFor="endTime">End Time:</label>
                                    </div>
                                    <input type="time"
                                        value={endTime}
                                        onChange={(e) => handleEndTimeChange(e)}
                                        name="endTime" id="endTime"     
                                    />
                                </div>        
                                    
                             </div>
                            
                            <button className={style.addSchedule} onClick={handleAddschedule}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <div className={style.formButtons}>
                               <Link to="/dashboard"> <button>Cancel</button></Link>
                                <button>Save</button>
                            </div>
                    </form>
    
                </div>
                </div>
                <div className={style.scheduleSection}>
                    <div className={style.scheduleBar}>
                        <h3>Schedules</h3>
                    </div>
                    {schedules.map((schedule, index) => (
                        <div key={index} className={style.scheduleItem}>
                            <h4>Purpose: {schedule.purpose}</h4>
                            <p>Start Date: {schedule.startDate}</p>
                            <p>Start Time: {schedule.startTime}</p>
                            <p>End Date: {schedule.endDate}</p>
                            <p>End Time: { schedule.endTime}</p>
                        </div>
                    ))}
                   

                </div>
            </div>        
        </div>
          
    )
}

export default CreateStudyPlan;
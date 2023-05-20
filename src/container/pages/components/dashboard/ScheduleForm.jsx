import {useState} from "react";
import styles from '../../styles/Dashboard.module.css';



const ScheduleForm = () => {
    const [purpose, setPurpose] = useState();
    const [startDate, setStartDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endDate, setEndDate] = useState();
    const [endTime, setEndTime] = useState();


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

   
    return(
        <div className={styles.studyPlanForm}>
            <form className={styles.formsection}>
                <div className={styles.addScheduleForm}>
                    <h3>Add Schedule: </h3>
                    <input type="text"
                        value={purpose}
                        onChange={(e) => handlePurposeChange(e)}
                        name="purpose" id="purpose"
                        placeholder="Purpose:"
                    /> 
                    <div>
                        <div>
                            <label htmlFor="startDate">Start Date:</label>
                        </div>
                        <input type="Date"
                            value={startDate}
                            onChange={(e) => handleStartDateChange(e)}
                            name="startDate" id="startDate"
                        /> 
                    </div>
                    <div>
                        <div>
                            <label htmlFor="startDate">Start Date:</label>
                        </div>
                        <input type="time"
                            value={startTime}
                            onChange={(e) => handleStartTimeChange(e)}
                            name="startTime" id="startTime"     
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="startDate">Start Date:</label>
                        </div>
                        <input type="Date"
                            value={endDate}
                            onChange={(e) => handleEndDateChange(e)}
                            name="endDate" id="endDate"
                        /> 
                    </div>
                    <div>
                        <div>
                            <label htmlFor="startDate">Start Date:</label>
                        </div>
                        <input type="time"
                            value={endTime}
                            onChange={(e) => handleEndTimeChange(e)}
                            name="endTime" id="endTime"
                        />
                    </div>
                   
            </div>
            </form>
            </div>
    )
}

export default ScheduleForm;
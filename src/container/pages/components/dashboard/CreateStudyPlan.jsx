import { useContext, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import style from "../../styles/StudyPlan.module.css";
import SideSection from "./SideSection";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import StudyPlanContext from "../../Contexts/StudyPlanContext";

const CreateStudyPlan = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [schedules, setSchedules] = useState([]);
  const { addStudyPlan } = useContext(StudyPlanContext);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const handleStartDateTimeChange = (e) => {
    setStartDateTime(e.target.value);
  };

  const handleEndDateTimeChange = (e) => {
    setEndDateTime(e.target.value);
  };

  const handleAddschedule = (e) => {
    e.preventDefault();
    const newSchedule = {
      purpose: purpose,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };
    setSchedules([...schedules, newSchedule]);
    setPurpose("");
    setStartDateTime("");
    setEndDateTime("");
  };

  const handleAddStudyPlan = (e) => {
    e.preventDefault();
    const newSchedules = schedules.map((schedule) => ({
      purpose: schedule.purpose,
      startDate: schedule.startDateTime,
      endDateTime: schedule.endDateTime,
    }));

    const newStudyPlan = {
      title,
      description,
      schedules: newSchedules,
    };

    addStudyPlan(newStudyPlan);

    setTitle("");
    setDescription("");
    setSchedules([]);
    console.log(newStudyPlan);
    navigate("/studyplan");
  };

  return (
    <div className={styles.container}>
      <SideSection />
      <div className={style.createPlanSection}>
        <div className={style.createPlan}>
          <div className={style.studyBar}>
            <h3>Create Study Plan</h3>
          </div>
          <div className={style.studyPlanForm}>
            <form className={style.formSection} onSubmit={handleAddStudyPlan}>
              <input
                className={style.titleForm}
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e)}
                name="title"
                id="title"
                placeholder="Title:"
              />{" "}
              <br />
              <textarea
                type="text"
                value={description}
                onChange={(e) => handleDescriptionChange(e)}
                rows="15"
                cols="50"
                name="description"
                id="description"
                placeholder="Description:"
              ></textarea>{" "}
              <br />
              <div className={style.addScheduleForm}>
                <h4>Add Schedule: </h4>

                <input
                  className={style.titleForm}
                  type="text"
                  value={purpose}
                  onChange={(e) => handlePurposeChange(e)}
                  name="purpose"
                  id="purpose"
                  placeholder="Purpose:"
                />

                <div className={style.dateTimeSection}>
                  <div className={style.formDateTime}>
                    <div>
                      <label htmlFor="startDateTime">
                        Start Date And Start Time:
                      </label>
                    </div>
                    <input
                      type="datetime-local"
                      value={startDateTime}
                      onChange={(e) => handleStartDateTimeChange(e)}
                      name="startDateTime"
                      id="startDateTime"
                    />
                  </div>
                </div>

                <div className={style.dateTimeSection}>
                  <div className={style.formDateTime}>
                    <div>
                      <label htmlFor="endDate">End Date And End Time:</label>
                    </div>
                    <input
                      type="datetime-local"
                      value={endDateTime}
                      onChange={(e) => handleEndDateTimeChange(e)}
                      name="endDateTime"
                      id="endDateTime"
                    />
                  </div>
                </div>

                <button
                  className={style.addSchedule}
                  onClick={handleAddschedule}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className={style.formButtons}>
                <Link to="/dashboard">
                  {" "}
                  <button>Cancel</button>
                </Link>
                <button type="submit">Save</button>
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
              <h5>Purpose: {schedule.purpose}</h5>
              <p>Start Date And Time: {schedule.startDateTime}</p>
              <p>End Date And Time: {schedule.endDateTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateStudyPlan;

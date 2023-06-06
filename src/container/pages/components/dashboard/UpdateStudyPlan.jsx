import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Dashboard.module.css";
import style from "../../styles/StudyPlan.module.css";
import SideSection from "./SideSection";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import StudyPlanContext from "../../Contexts/StudyPlanContext";

const UpdateStudyPlan = () => {
  const { index } = useParams();
  const history = useNavigate();
  const { studyPlans, updateStudyPlan } = useContext(StudyPlanContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    if (studyPlans[index]) {
      const { title, description, schedules } = studyPlans[index];
      setTitle(title);
      setDescription(description);
      setSchedules(schedules);
    }
  }, [studyPlans, index]);

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

  const deleteSchedule = (index) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      const newSchedule = [...schedules];
      newSchedule.splice(index, 1);
      setSchedules(newSchedule);
    }
  };

  //   const handleRemoveSchedule = (scheduleIndex) => {
  //     const updatedSchedules = [...schedules];
  //     updatedSchedules.splice(scheduleIndex, 1);
  //     setSchedules(updatedSchedules);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudyPlan = {
      title,
      description,
      schedules,
    };

    updateStudyPlan(index, updatedStudyPlan);
    history.push("/studyplan"); // Redirect to the study plans page after updating
  };

  return (
    // <div>
    //   <h1>Update Study Plan</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="title">Title:</label>
    //       <input
    //         type="text"
    //         id="title"
    //         value={title}
    //         onChange={handleTitleChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="description">Description:</label>
    //       <textarea
    //         id="description"
    //         value={description}
    //         onChange={handleDescriptionChange}
    //       />
    //     </div>
    //     <div>
    //       <h4>Schedules:</h4>
    //       {schedules.map((schedule, index) => (
    //         <div key={index}>
    //           <input
    //             type="text"
    //             value={schedule}
    //             onChange={(e) => handleScheduleChange(e, index)}
    //           />
    //           <button type="button" onClick={() => handleRemoveSchedule(index)}>
    //             Remove
    //           </button>
    //         </div>
    //       ))}
    //       <button type="button" onClick={handleAddSchedule}>
    //         Add Schedule
    //       </button>
    //     </div>
    //     <button type="submit">Update</button>
    //   </form>
    // </div>

    <div className={styles.container}>
      <SideSection />
      <div className={style.createPlanSection}>
        <div className={style.createPlan}>
          <div className={style.studyBar}>
            <h1>Update Study Plan</h1>
          </div>
          <div className={style.studyPlanForm}>
            <form className={style.formSection} onSubmit={handleSubmit}>
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
                <button type="submit">Update</button>
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

export default UpdateStudyPlan;

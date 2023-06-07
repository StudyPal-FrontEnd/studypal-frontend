import { useContext, useState, useRef } from "react";
import styles from "../../styles/Dashboard.module.css";
import style from "../../styles/StudyPlan.module.css";
import SideSection from "./SideSection";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import StudyPlanContext from "../../Contexts/StudyPlanContext";
import axios from "axios";
import UserContext from "../../Contexts/UserContext";

const CreateStudyPlan = () => {
  const { user } = useContext(UserContext);
  const { addStudyPlan } = useContext(StudyPlanContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [createError, setCreateError] = useState(false);
  const [scheduleError, setScheduleError] = useState(false);

  const [deleteIndices, setDeleteIndices] = useState([]);
  const navigate = useNavigate();
  const scheduleRefs = useRef([]);

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

    if (!purpose.trim() || !startDateTime.trim() || !endDateTime.trim()) {
      setScheduleError(true);

      setTimeout(() => {
        setScheduleError(false);
      }, 3000);

      return;
    }

    if (purpose.trim() && startDateTime.trim() && endDateTime.trim()) {
      const newSchedule = {
        purpose: purpose,
        startDateTime: startDateTime,
        endDateTime: endDateTime,
      };
      setSchedules([...schedules, newSchedule]);
    }

    setPurpose("");
    setStartDateTime("");
    setEndDateTime("");
  };

  const confirmDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      const newSchedule = [...schedules];
      newSchedule.splice(index, 1);
      setSchedules(newSchedule);
    }
  };

  const handleAddStudyPlan = async (e) => {
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
      userId: user.id,
    };

    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/studypal/studyplan/create",
        newStudyPlan
      );
      console.log(response.data);

      const studyPlanId = response.data.id;
      for (const schedule of newSchedules) {
        await axios.post(
          "http://localhost:9000/api/v1/studypal/schedule/create",
          {
            studyPlanId,
            purpose: schedule.purpose,
            startDate: schedule.startDate,
            endDateTime: schedule.endDateTime,
          }
        );
      }

      addStudyPlan(newStudyPlan);
      navigate("/studyplan");

      setTitle("");
      setDescription("");
      setSchedules([]);
      console.log(newStudyPlan);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAddStudyPlan = (e) => {
  //   e.preventDefault();

  //   if (title.trim() === "" || description.trim() === "") {
  //     setCreateError(true);

  //     setTimeout(() => {
  //       setCreateError(false);
  //     }, 3000);

  //     return;
  //   }

  //   const newSchedules = schedules.map((schedule) => ({
  //     purpose: schedule.purpose,
  //     startDate: schedule.startDateTime,
  //     endDateTime: schedule.endDateTime,
  //   }));

  //   const newStudyPlan = {
  //     title,
  //     description,
  //     schedules: newSchedules,
  //   };

  //   addStudyPlan(newStudyPlan);

  //   setTitle("");
  //   setDescription("");
  //   setSchedules([]);
  //   console.log(newStudyPlan);
  //   navigate("/studyplan");
  // };

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
              {createError && (
                <p className={styles.error}>
                  Please fill in the title and description fields.
                </p>
              )}
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
                {scheduleError && (
                  <p className={styles.error}>
                    You cannot add empty schedule please add at least one
                    schedule.
                  </p>
                )}

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
            <div
              key={index}
              className={style.scheduleItem}
              ref={(ref) => (scheduleRefs.current[index] = ref)}
              onMouseEnter={() => setDeleteIndices(index)}
              onMouseLeave={() => setDeleteIndices(null)}
              onClick={() => confirmDelete(index)}
            >
              <h5>Purpose: {schedule.purpose}</h5>
              <p>Start Date And Time: {schedule.startDateTime}</p>
              <p>End Date And Time: {schedule.endDateTime}</p>
              {deleteIndices === index && (
                <div className={style.deleteIcon}>
                  <FontAwesomeIcon icon={faAsterisk} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateStudyPlan;

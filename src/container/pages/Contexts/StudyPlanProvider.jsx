import React, { useState } from "react";

import StudyPlanContext from "./StudyPlanContext";
// import { Outlet } from "react-router-dom";

const StudyPlanProvider = ({ children }) => {
  const [studyPlans, setStudyPlans] = useState([]);

  const addStudyPlan = (newStudyPlan) => {
    setStudyPlans([...studyPlans, newStudyPlan]);
  };

  const updateStudyPlan = (index, updatedStudyPlan) => {
    const newStudyPlans = [...studyPlans];
    newStudyPlans[index] = updatedStudyPlan;
    setStudyPlans(newStudyPlans);
  };

  const deleteStudyPlan = (index) => {
    if (window.confirm("Are you sure you want to delete this study plan?")) {
      const newStudyPlans = [...studyPlans];
      newStudyPlans.splice(index, 1);
      setStudyPlans(newStudyPlans);
    }
  };

  return (
    <StudyPlanContext.Provider
      value={{ studyPlans, addStudyPlan, updateStudyPlan, deleteStudyPlan }}
    >
      {children}
    </StudyPlanContext.Provider>
  );
};

export default StudyPlanProvider;

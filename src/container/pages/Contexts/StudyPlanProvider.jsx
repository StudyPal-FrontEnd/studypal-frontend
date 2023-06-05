import React, { useState } from "react";

import StudyPlanContext from "./StudyPlanContext";
import { Outlet } from "react-router-dom";

const StudyPlanProvider = ({ children }) => {
  const [studyPlans, setStudyPlans] = useState([]);

  const addStudyPlan = (newStudyPlan) => {
    setStudyPlans([...studyPlans, newStudyPlan]);
  };

  return (
    <StudyPlanContext.Provider value={{ studyPlans, addStudyPlan }}>
      {children}
    </StudyPlanContext.Provider>
  );
};

export default StudyPlanProvider;

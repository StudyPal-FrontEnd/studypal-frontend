import "./App.css";
import React, { useState } from "react";
import LandingPage from "./container/pages/components/auth/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./container/pages/components/auth/Login";
import Signup from "./container/pages/components/auth/SignUp";
import OTP from "./container/pages/components/auth/OtpInput";
import Dashboard from "./container/pages/components/dashboard/Dashboard";
import DashboardTemplate from "./container/pages/components/dashboard/Template";
import StudyPlansPage from "./container/pages/components/dashboard/StudyPlansPage";
import NotesPage from "./container/pages/components/dashboard/NotesPage";
import ResourceMaterials from "./container/pages/components/dashboard/ResourceMaterials";
import CreateStudyPlan from "./container/pages/components/dashboard/CreateStudyPlan";
import CreateNote from "./container/pages/components/dashboard/CreateNote";
import SearchResources from "./container/pages/components/dashboard/SearchResources";
import Profile from "./container/pages/components/ContextPractice/Profile";
import UserName from "./container/pages/components/ContextPractice/UserName";
import { UsernameContext } from "./container/pages/Contexts/UserNameContext";
import StudyPlanProvider from "./container/pages/Contexts/StudyPlanProvider";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <StudyPlanProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp-page" element={<OTP />} />

            <Route path="dashboard" element={<Dashboard />} />

            {/* Study Plan context routes */}
            <Route path="/studyplan">
              <Route path="" element={<StudyPlansPage />} />
              <Route path="create" element={<CreateStudyPlan />} />
            </Route>

            <Route path="notes" element={<NotesPage />} />
            <Route path="resourcematerials" element={<ResourceMaterials />} />

            <Route path="createnotes" element={<CreateNote />} />
            <Route path="searchresources" element={<SearchResources />} />
            <Route path="template" element={<DashboardTemplate />} />
            {/* Context Practical */}
            <Route
              path="context"
              element={
                <UsernameContext.Provider
                  value={{ username, setUsername, setShowProfile }}
                >
                  {showProfile ? <Profile /> : <UserName />}
                </UsernameContext.Provider>
              }
            />
          </Routes>
        </Router>
      </div>
    </StudyPlanProvider>
  );
}

export default App;

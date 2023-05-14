import React from "react";
import { useNavigate } from "react-router-dom";



const LandingPage = () => {
    const navigate = useNavigate(); 
    return (
        <div className="landing-page">
            <div className="container">
                <button onClick={() => navigate('/login')}>Get Started</button>
            </div>
        </div>
    )
}

export default LandingPage;
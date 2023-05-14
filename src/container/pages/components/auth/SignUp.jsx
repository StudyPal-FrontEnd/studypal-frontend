import React from "react";
import '../../styles/AuthPages.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faInfo } from '@fortawesome/free-solid-svg-icons'



const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="left-section"></div>
            <div className="right-section">
                <div className="top-section">
                    <p><a href="landingpage"> <FontAwesomeIcon icon={faLessThan} />  Return Home</a></p>
                    <p>Not a member yet? <a href="signup"><strong>JOIN NOW</strong></a></p>
                </div>
                <div className="info-section">
                    <p>Welcome!</p>
                    <p>Sign up by entering the  information below</p>
                </div>
                <div className="form-section">
                    <form className="form-input">
                        <input type="text" name="firstName" id="firstName" placeholder='First Name' />
                        <input type="text" name="lastName" id="lastName" placeholder='Last Name' />
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                        <button className="paging-btn" onClick={() => navigate('/otp')}>Signup</button>
                    </form>

                </div>
                <span className="help"><a href="landingpage"><FontAwesomeIcon icon={faInfo} /> I need help?</a></span>
            </div>
        </div>
    )
}


export default Signup;
import React from "react";
import '../../styles/AuthPages.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan} from '@fortawesome/free-solid-svg-icons'



const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="left-section"></div>
            <div className="right-section">
                <div className="top-section">
                    <p><Link to="/"> <FontAwesomeIcon icon={faLessThan} />  Return Home</Link></p>
                    <p>Already a member? <Link to="/login"><strong>LOG IN NOW</strong></Link></p>
                </div>
                <div className="signup-section">
                    <p>Welcome!</p>
                    <p>Sign up by entering the  information below</p>
                </div>
                <div className="form-section">
                    <form className="form-input">
                        <input type="text" name="firstName" id="firstName" placeholder='First Name:' /> <br />
                        <input type="text" name="lastName" id="lastName" placeholder='Last Name:' /> <br />
                        <input type="email" name="email" id="email" placeholder='Email:' /> <br />
                        <input type="password" name="password" id="password" placeholder='Password:' /> <br />
                        <button className="paging-btn" onClick={() => navigate('/otp')}>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Signup;
import { useState } from "react";
import '../../styles/AuthPages.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faInfo } from '@fortawesome/free-solid-svg-icons'



const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }



    return (
        <div className="container">
            <div className="left-section"></div>
            <div className="right-section">
                <div className="top-section">
                    <p><Link to="/"> <FontAwesomeIcon icon={faLessThan} />  Return Home</Link></p>
                    <p>Not a member yet? <Link to="/signup"><strong>JOIN NOW</strong></Link></p>
                </div>
                <div className="login-section">
                    <p>Welcome Back!</p>
                    <p>Login to your dashboard</p>
                </div>
                <div className="form-section">
                    <form className="form-input">
                        <input value={email}
                            type="email"
                            onChange={(e) => handleEmailChange(e)}
                            name="email" id="email" placeholder='Email:'
                        />
                        <br />
                         <input value={password}
                            type="password"
                            onChange={(e) => handlePasswordChange(e)}
                            name="password" id="password" placeholder='Password:'
                        /> <br />
                        <button className="paging-btn" onClick={() => navigate('/dashboard')}>Login</button>
                        <p><Link to="/forgot-password"><FontAwesomeIcon icon={faInfo} />Forgot Password?</Link></p>
                    </form>
                </div>
                <span className="help"><a href="landingpage"><FontAwesomeIcon icon={faInfo} />need help?</a></span>
                
            </div>
        </div>
    )
} 

export default Login;

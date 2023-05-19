import { useState } from "react";
import styles from '../../styles/AuthPages.module.css';
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
        <div className={styles.container}>
            <div className={styles.leftSection}></div>
            <div className={styles.rightSection}>
                <div className={styles.topSection}>
                    <p><Link to="/"> <FontAwesomeIcon icon={faLessThan} />  Return Home</Link></p>
                    <p>Not a member yet? <Link to="/signup"><strong>JOIN NOW</strong></Link></p>
                </div>
                <div className={styles.loginSection}>
                    <p>Welcome Back!</p>
                    <p>Login to your dashboard</p>
                </div>
                <div className={styles.formSection}>
                    <form className={styles.formInput}>
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
                        <button className={styles.pageButton} onClick={() => navigate('/dashboard')}>Login</button>
                        <p><Link to="/forgot-password"><FontAwesomeIcon icon={faInfo} />Forgot Password?</Link></p>
                    </form>
                </div>
                <span className={styles.help}><a href="landingpage"><FontAwesomeIcon icon={faInfo} />need help?</a></span>
                
            </div>
        </div>
    )
} 

export default Login;

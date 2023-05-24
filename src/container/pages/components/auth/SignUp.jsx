import {useState} from "react";
import styles from '../../styles/AuthPages.module.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan} from '@fortawesome/free-solid-svg-icons'



const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const navigate = useNavigate();
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)  
     }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)  
     }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)  
     }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)  
     }

   

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}></div>
            <div className={styles.rightSection}>
                <div className={styles.topSection}>
                    <p><Link to="/"> <FontAwesomeIcon icon={faLessThan} />  Return Home</Link></p>
                    <p>Already a member? <Link to="/login"><strong>LOG IN NOW</strong></Link></p>
                </div>
                <div className={styles.signupSection}>
                    <p>Welcome!</p>
                    <p>Sign up by entering the  information below</p>
                </div>
                <div className={styles.formSection}>
                    <form className={styles.formInput}>
                        <input type="text"
                            value={firstName}
                            onChange={(e) => handleFirstNameChange}
                            name="firstName"
                            id="firstName"
                            placeholder='First Name:' /> <br />
                        <input type="text"
                            value={lastName}
                            onChange={(e) => handleLastNameChange(e)}
                            name="lastName" id="lastName"
                            placeholder='Last Name:' /> <br />
                        <input type="email"
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                            name="email"
                            id="email"
                            placeholder='Email:' /> <br />
                        <input type="password"
                            value={password}
                            onChange={(e) => handlePasswordChange}
                            name="password"
                            id="password"
                            placeholder='Password:' /> <br />
                        <button className={styles.pageButton} onClick={() => navigate('/otp')}>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Signup;
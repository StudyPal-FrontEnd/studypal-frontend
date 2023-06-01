import {useState} from "react";
import styles from '../../styles/AuthPages.module.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';



const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentField, setCurrentField] = useState("");
    const [errors, setErrors] = useState({});
    const nameRegex = /^[A-Z][a-zA-Z]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  
  const [userData, setUserData] = useState([])

  
    const navigate = useNavigate();
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
      setCurrentField("firstName");
    };
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
      setCurrentField("lastName");
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setCurrentField("email");
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setCurrentField("password");
    };

    const isValidFirstName = (firstName) => {
        return nameRegex.test(firstName);
    };
    
    const isValidLastName = (lastName) => {
        return nameRegex.test(lastName);
      };
  
    const isValidEmail = (email) => {
      return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return passwordRegex.test(password);
    };

    const handleUserData = () => {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:9000/api/v1/studypal/register", data)
        .then(response => {
          console.log(response.data);  
          setUserData(response.data);
          navigate("/otp-page", {state: {email: email}});
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const validationErrors = {};
  
      if (firstName.trim() === "") {
        validationErrors.firstName = "Please enter your first name.";
        setCurrentField("firstName");
      } else if (!isValidFirstName(firstName)) {
        validationErrors.firstName = "First name must start with a capital letter";
        setCurrentField("firstName");
      } else if (lastName.trim() === "") {
        validationErrors.lastName = "Please enter your last name.";
        setCurrentField("lastName");
      } else if (!isValidLastName(lastName)) {
        validationErrors.lastName = "Last name must start with a capital letter";
        setCurrentField("lastName");
      } else if (email.trim() === "") {
        validationErrors.email = "Please enter your email address.";
        setCurrentField("email");
      } else if (!isValidEmail(email)) {
        validationErrors.email = "Please enter a valid email address.";
        setCurrentField("email");
      } else if (password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters long.";
        setCurrentField("password");
      } else if (!isValidPassword(password)) { 
        validationErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one digit";
        setCurrentField("password");
    }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        navigate("/otp-page");
      }
        
      setTimeout(() => {
        setErrors({});
        setCurrentField("");
      }, 3000);

      handleUserData();

    };

  
   

   

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
                    <form className={styles.formInput} onSubmit={handleFormSubmit}>
                        <input type="text"
                            value={firstName}
                            onChange={(e) => handleFirstNameChange(e)}
                            name="firstName"
                            id="firstName"
                            placeholder='First Name:' />
                         {errors.firstName && currentField === "firstName" && (
                            <p className={styles.error}>{errors.firstName}</p>
                         )}
                        <br />
                        <input type="text"
                            value={lastName}
                            onChange={(e) => handleLastNameChange(e)}
                            name="lastName" id="lastName"
                            placeholder='Last Name:' />
                       {errors.lastName && currentField === "lastName" && (
                         <p className={styles.error}>{errors.lastName}</p>
                         )}
                        <br />
                        <input type="email"
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                            name="email"
                            id="email"
                            placeholder='Email:' />
                        {errors.email && currentField === "email" && (
                         <p className={styles.error}>{errors.email}</p>
                         )}
                        <br />
                        <input type="password"
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                            name="password"
                            id="password"
                            placeholder='Password:' />
                       {errors.password && currentField === "password" && (
                         <p className={styles.error}>{errors.password}</p>
                         )}
                        <br />
                        <button className={styles.pageButton} >Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Signup;
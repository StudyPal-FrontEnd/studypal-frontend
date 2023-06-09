import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faInfo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import styles from "../../styles/AuthPages.module.css";
import UserContext from "../../Contexts/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentField, setCurrentField] = useState("");
  const [errors, setErrors] = useState({});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setCurrentField("email");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setCurrentField("password");
  };

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (email.trim() === "") {
      validationErrors.email = "Please enter your email address.";
      setCurrentField("email");
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Please enter a valid email address.";
      setCurrentField("email");
    } else if (password.length < 6) {
      validationErrors.password =
        "Password must be at least 6 characters long.";
      setCurrentField("password");
    } else if (!isValidPassword(password)) {
      validationErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter,special character, and one digit";
      setCurrentField("password");
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = {
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:9000/api/v1/studypal/login", data)
        .then((response) => {
          const userData = response.data;
          login(userData);

          navigate("/dashboard");
          // const { firstName, lastName, ...data } = response;
        })

        .catch((error) => {
          console.log(error);
          setErrors("Invalid email or password");
        });
    }

    setTimeout(() => {
      setErrors({});
    }, 3000);

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
        <div className={styles.topSection}>
          <p>
            <Link to="/">
              <FontAwesomeIcon icon={faLessThan} /> Return Home
            </Link>
          </p>
          <p>
            Not a member yet?{" "}
            <Link to="/signup">
              <strong>JOIN NOW</strong>
            </Link>
          </p>
        </div>
        <div className={styles.loginSection}>
          <p>Welcome Back!</p>
          <p>Login to your dashboard</p>
        </div>
        <div className={styles.formSection}>
          <form className={styles.formInput} onSubmit={handleFormSubmit}>
            <input
              value={email}
              type="email"
              onChange={(e) => handleEmailChange(e)}
              name="email"
              id="email"
              placeholder="Email:"
            />
            {errors.email && currentField === "email" && (
              <p className={styles.error}>{errors.email}</p>
            )}
            <br />
            <input
              value={password}
              type="password"
              onChange={(e) => handlePasswordChange(e)}
              name="password"
              id="password"
              placeholder="Password:"
            />
            {errors.password && currentField === "password" && (
              <p className={styles.error}>{errors.password}</p>
            )}
            <br />
            {errors.login && <p className={styles.error}>{errors.login}</p>}
            <button className={styles.pageButton}>Login</button>
            <p>
              <Link to="/forgot-password">
                <FontAwesomeIcon icon={faInfo} /> Forgot Password?
              </Link>
            </p>
          </form>
        </div>
        <span className={styles.help}>
          <a href="landingpage">
            <FontAwesomeIcon icon={faInfo} /> need help?
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;

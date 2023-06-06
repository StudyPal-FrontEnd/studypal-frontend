import { useState } from "react";
import styles from "../../styles/AuthPages.module.css";
import style from "../../styles/otp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PinInput from "react-pin-input";

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || "";
  const [otp, setOtp] = useState("");
  // const [otp2, setOtp2] = useState("");
  // const [otp3, setOtp3] = useState("");
  // const [otp4, setOtp4] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // const handleOtpChange = (e, inputNum) => {
  //   const value = e.target.value;
  //   switch (inputNum) {
  //     case 1:
  //       setOtp1(value);
  //       break;
  //     case 2:
  //       setOtp2(value);
  //       break;
  //     case 3:
  //       setOtp3(value);
  //       break;
  //     case 4:
  //       setOtp4(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // const verificationToken = otp1 + otp2 + otp3 + otp4;

    axios
      .post("http://localhost:9000/api/v1/studypal/verify", {
        email,
        verificationToken: otp,
      })
      .then((response) => {
        setShowModal(true);
        setModalMessage("Your email is verified.");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
        setModalMessage("Incorrect or expired OTP. Please try again.");
        setShowModal(true);
      });

    setOtp("");
    // setOtp2("");
    // setOtp3("");
    // setOtp4("");
  };

  const handleResendEmail = () => {
    axios
      .post("http://localhost:9000/api/v1/studypal/resend-email", { email })
      .then((response) => {
        console.log("Email resent successfully.");
        setModalMessage("Email resent successfully.");
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error.message);
        setModalMessage("Failed to resend email. Please try again.");
        setShowModal(true);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
        <div className={styles.topSection}>
          <p>
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faLessThan} /> Return Home
            </Link>
          </p>
        </div>

        <div className={style.tokenContainer}>
          <div className={style.tokenHeader}>
            <p>
              {" "}
              Kindly Check your mail to see your OTP number for Account
              verification
            </p>
            <h4>Enter you OTP Number</h4>
          </div>
          <div className={style.tokenSection}>
            <form className={style.tokenForm} onSubmit={handleOtpSubmit}>
              {/* <input
                type="password"
                value={otp1}
                name="password"
                id="password"
                maxLength="1"
                placeholder=""
                onChange={(e) => handleOtpChange(e, 1)}
              />
              <input
                type="password"
                value={otp2}
                name="password"
                id="password"
                maxLength="1"
                placeholder=""
                onChange={(e) => handleOtpChange(e, 2)}
              />
              <input
                type="password"
                value={otp3}
                name="password"
                id="password"
                maxLength="1"
                placeholder=""
                onChange={(e) => handleOtpChange(e, 3)}
              />
              <input
                type="password"
                value={otp4}
                name="password"
                id="password"
                maxLength="1"
                placeholder=""
                onChange={(e) => handleOtpChange(e, 4)}
              /> */}
              <PinInput
                length={4}
                secret
                onChange={handleOtpChange}
                inputMode="numeric"
              />
              <br />
              <button className={style.pageButton}>Continue</button> <br />
              <Link to="" onClick={handleResendEmail}>
                Resend email{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={style.modal}>
          <div onClick={closeModal} className={style.overlay}></div>
          <div className={style.modalContent}>
            <p>{modalMessage}</p>
            <button className={style.modalButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OTP;

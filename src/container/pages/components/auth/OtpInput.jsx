import { useState } from "react";
import "../../styles/AuthPages.css";
import "../../styles/otp.css";
import image from "../../../../assets/images/svg/authImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

function OTP() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="page1">
        <div className="leftside">
          <img src={image} alt="" className="page1Image" />
        </div>
        <div className="rightside">
          <div className="top">
            <p>
              <a href="landingpage">
                {" "}
                <FontAwesomeIcon icon={faLessThan} /> Return Home
              </a>
            </p>
          </div>
          <div className="text1">
            <p className="text">
              Kindly Check your mail to see your OTP number for Account
              verification
            </p>
          </div>
          <div className="text2">
            <p className="log">Enter your OTP Number</p>
          </div>
          <div className="otp-div">
            <input type="text" className="otp-input" />
            <input type="text" className="otp-input" />
            <input type="text" className="otp-input" />
            <input type="text" className="otp-input" />
          </div>
          <button
            type="button"
            className="button"
            onClick={() => {
              setShow(!show);
            }}
          >
            Continue
          </button>
        </div>
      </div>
      <div
        className="modalcontainer"
        style={{ display: show ? "block" : "none" }}
      >
        <div className="content">
          <p className="acctmodal">
            Your OTP is invalid or expired
            <span className="span">
              <a href="" className="signup">
                back
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default OTP;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Boom from "../../assets/photo/LogoBoom.svg";
import backgroundImage from "../../assets/photo/Background.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className="Login"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="text-center">
          <img src={Boom} alt="Logo" className="mt-2" />
          {/*  */}
          <div style={{ marginTop: "23px" }}>
            <h4 style={{ marginRight: "98px" }}>Merchant Registration</h4>
            <p style={{ marginRight: "150px" }}>Enter your account details</p>
            <div>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <label
                  htmlFor="userName"
                  className="form-label"
                  style={{ marginRight: "180px" }}
                >
                  Business Legal Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  placeholder="Enter"
                  style={{
                    borderRadius: "5px",
                    width: "322px",
                    borderColor: "transparent",
                  }}
                />

                {/*  */}
                <label
                  htmlFor="userName"
                  className="form-label"
                  style={{ marginRight: "242px" }}
                >
                  User Handle
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  placeholder="Enter"
                  style={{
                    borderRadius: "5px",
                    width: "322px",
                    borderColor: "transparent",
                  }}
                />
                {/*  */}
                <label
                  htmlFor="userName"
                  className="form-label"
                  style={{ marginRight: "230px" }}
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  placeholder="Enter"
                  style={{
                    borderRadius: "5px",
                    width: "322px",
                    borderColor: "transparent",
                  }}
                />
                {/*  */}
                <label
                  htmlFor="userName"
                  className="form-label"
                  style={{ marginRight: "219px" }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  placeholder="Enter"
                  style={{
                    borderRadius: "5px",
                    width: "322px",
                    borderColor: "transparent",
                  }}
                />

                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ marginBottom: "5px", marginRight: "259px" }}
                >
                  Password
                </label>
                <div style={{ position: "relative", marginBottom: "20px" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter"
                    style={{
                      borderRadius: "5px",
                      paddingRight: "40px",
                      width: "329px",
                      height: "32px",
                    }}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <p
                  style={{
                    cursor: "pointer",
                    marginLeft: "208px",
                    marginTop: "-24px",
                    lineHeight: "24px",
                  }}
                >
                  Forgot Password?
                </p>
                <button
                  className="btn Logbtn"
                  type="submit"
                  onClick={handleNavigation}
                >
                  Register
                </button>
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={handleNavigation}
                    style={{ color: "#FE7720", cursor: "pointer" }}
                  >
                    Login Now
                  </span>
                </p>
              </form>
              <p>
                By creating an account,you agree the{" "}
                <span style={{ color: "#FE7720", cursor: "pointer" }}>
                  {" "}
                  Terms and conditions
                </span>
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
export default SignUp;

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Action/Loginauth";
import InputField from "../../Component/InputField/inputField";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import backgroundImage from "../../assets/photo/Background.svg";
import Boom from "../../assets/photo/LogoBoom.svg";
import "./login.css";

function MyComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    
    if (token) {
      // Redirect to root path if token exists
      !navigate("/")||!navigate("/register");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNavigationTo = (e) => {
    e.preventDefault();
  
    // Assuming formData and dispatch are defined in the component
    if (validateForm()) {
      dispatch(userLogin(formData))
        .then((res) => {
          if (res.payload && res.payload.token) {
            console.log("User logged in successfully",res.payload && res.payload.token);
            localStorage.setItem('user', res.payload.token);
            console.log("token", res.payload.token);
            navigate("/table");
          } else {
            console.error("Invalid credentials");
            // Handle the invalid credentials scenario, e.g., show an error message to the user
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  }
    

  const handleNavigation = () => {
    navigate("/register");
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.login) {
      newErrors.login = "Username is invalid";
      valid = false;
    }
    

    if (!formData.password) {
      newErrors.password = "Password is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div
      className="Login"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div>
        <img
          src={Boom}
          alt="Logo"
          width={"150px"}
          style={{ marginTop: "20px" }}
        />
      </div>

      <div className="Login" style={{ marginTop: "120px" }}>
        <div className="logForm">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
            onSubmit={handleNavigationTo}
          >
            <h2>Merchant Login</h2>
            <span>Enter your account details</span>
            <div className="mt-3">
              <label htmlFor="login" className="form-label">
                Username
              </label>
              <InputField
                type="text"
                id="login"
                name="login"
                placeholder="Enter"
                style={{ borderRadius: "5px", borderColor: "transparent" }}
                value={formData.login}
                onChange={handleInputChange}
              />
              {errors.login && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.login}
                </p>
              )}
            </div>

            <div>
              <label
                style={{ marginTop: "15px" }}
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>
              <div style={{ position: "relative", marginBottom: "20px" }}>
                <InputField
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter"
                  style={{ borderRadius: "5px" }}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "0px",
                    transform: "translateY(-50%)",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    width: "25px",
                  }}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              {errors.password && (
                <p
                  style={{ color: "red", fontSize: "12px", marginTop: "-20px" }}
                >
                  {errors.password}
                </p>
              )}
              <p
                style={{
                  cursor: "pointer",
                  marginTop: "-24px",
                  textAlign: "end",
                }}
              >
                Forgot Password?
              </p>
            </div>

            <div>
              <button
                className="Logbtn"
                style={{
                  borderColor: "transparent",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                Login
              </button>
            </div>

            <p style={{ fontSize: "13px", textAlign: "center" }}>
              Not a Merchant yet?{" "}
              <span
                onClick={handleNavigation}
                style={{ color: "#FE7720", cursor: "pointer" }}
              >
                Sign up Now
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}


export default MyComponent;

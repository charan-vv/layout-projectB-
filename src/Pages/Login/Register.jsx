import React, { useState } from "react";
import { addUser } from "../../Redux/Action/Loginauth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneNumberList from "../../Component/PhoneInput/phoneInput";
import InputField from "../../Component/InputField/inputField";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import backgroundImage from "../../assets/photo/Background.svg";
import Boom from "../../assets/photo/LogoBoom.svg";
import "./login.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    userHandle: "",
    email: "",
    password: "",
    phone_number: {
      country_code: "",
      number: "",
    },
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addUser(formData))
        .then(() => {
          console.log("Customer added successfully");
        })
        .catch((error) => {
          console.error("Error adding customer:", error);
        });
      // navigate("/");
    }
  };

  const handlePhoneNumberChange = (value) => {
    const { country_code, number } = value;
    setFormData({
      ...formData,
      phone_number: {
        country_code: country_code,
        number: number.replace(/[^A-Z0-9]+/ig, ""),
      },
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.username?.trim()) {
      newErrors.business_legal_name = "Legal name is required";
      valid = false;
    }

    if (!formData.userHandle?.trim()) {
      newErrors.username = "User handle is required";
      valid = false;
    }

    if (!formData.email?.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    if (
      !formData.phone_number?.number.trim() ||
      formData.phone_number.number.includes(" ")
    ) {
      newErrors.phone_number = "Phone number required with correct format";
      valid = false;
    }

    if (!formData.password?.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.trim().length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
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
        height: "100%",
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

      <div className="Login" style={{ marginTop: "100px" }}>
        <div className="logForm">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
            onSubmit={handleSubmit}
          >
            <h2>Merchant Registration</h2>
            <span>Enter your account details</span>
            <div>
              <label htmlFor="username" className="form-label mt-3">
                Business Legal Name
              </label>
              <InputField
                type="text"
                id="username"
                name="username"
                placeholder="Enter"
                style={{ borderRadius: "5px", borderColor: "transparent" }}
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.username}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="userHandle" className="form-label">
                User Handle
              </label>
              <InputField
                type="text"
                id="userHandle"
                name="userHandle"
                placeholder="Enter"
                style={{ borderRadius: "5px", borderColor: "transparent" }}
                value={formData.userHandle}
                onChange={handleInputChange}
              />
              {errors.userHandle && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.userHandle}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <InputField
                type="text"
                id="email"
                name="email"
                placeholder="Enter"
                style={{ borderRadius: "5px", borderColor: "transparent" }}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone_number" className="form-label">
                Phone Number
              </label>
              <div className=" ">
                <PhoneNumberList onPhoneNumberChange={handlePhoneNumberChange} />
                {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
              </div>
            </div>
            <div>
              <label htmlFor="password" className="form-label">
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
                Register
              </button>
            </div>

            <p style={{ fontSize: "13px", textAlign: "center" }}>
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                style={{ color: "#FE7720", cursor: "pointer" }}
              >
                Login Now
              </span>
            </p>
          </form>
          <p style={{ fontSize: "13px", textAlign: "center" }}>
            By creating an account, you agree the{" "}
            <span style={{ color: "#FE7720", cursor: "pointer" }}>
              Terms and conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;


import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import backgroundImage from '../../assets/photo/Background.svg';
import Boom from "../../assets/photo/LogoBoom.svg";


function MyComponent() {
  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
const handleNavigation = () => {
  navigate("/register");
};
const handleNavigationTo = () => {
  navigate("/table");
};
  return (
    <>
      
      <div 
        className='Login'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',
        }}
      >
          <div className='text-center'>
        <img src={Boom} alt="Logo" className='mt-2' />
       {/*  */}
       <div style={{ marginTop: "123px" }}>
            <h3 style={{marginRight:"127px"}}>Merchant Login</h3>
            <p style={{marginRight:"142px"}}>Enter your account details</p>
            <div>
              <form 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: "center" 
                }}
              >
                <label htmlFor="userName" className="form-label" style={{marginRight:"253px"}}>
                  Username
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  placeholder="Enter"
                  style={{ borderRadius: "5px",width:"322px", borderColor:'transparent' }}
                />

                <label htmlFor="password" className="form-label" style={{ marginBottom: '5px' ,marginRight:"259px"}}>
                  Password
                </label>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Enter"
                    style={{ borderRadius: '5px', paddingRight: '40px', width:"329px",height:"32px" }}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
                <p style={{cursor:"pointer", marginLeft:"208px",marginTop:"-24px", lineHeight:"24px"}}>
                  Forgot Password?
                </p>
                <button className='btn Logbtn' type="submit" onClick={handleNavigationTo}>
                  Login
                </button>
                <p>Not a Merchant yet? <span onClick={handleNavigation} style={{ color: '#FE7720',cursor:"pointer" }}>Sign up Now</span></p>

              </form>
            </div>
          </div>
       {/*  */}
        </div>
      </div>
    </>
  );
}

export default MyComponent;

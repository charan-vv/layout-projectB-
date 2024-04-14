import React, { useState } from "react";
import "./customer.css";

function Address() {
  const [customer, setCustomer] = useState({
    firstname: "",
    lastName: "",
    alternativephone: "",
    addline: "",
    addressline: "",
    country: "",
    state: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  

  return (
    <div className="basic">
      <h2 className="mb-5">Address Details</h2>
      <form>
        <div className="container ">
          <div className="row">
            <div className="col-4 mb-5">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={customer.firstname}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
            <div className="col-4">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={customer.lastName}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
            <div className="col-4">
              <label htmlFor="alternativephone" className="form-label">Alternate Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="alternativephone"
                name="alternativephone"
                value={customer.alternativephone}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4 mb-5">
              <label htmlFor="addline" className="form-label">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                id="addline"
                name="addline"
                value={customer.addline}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
            <div className="col-4">
              <label htmlFor="addressline" className="form-label">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                id="addressline"
                name="addressline"
                value={customer.addressline}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
            <div className="col-4">
              <label htmlFor="customerCountry" className="form-label">Country</label>
              <select
                className="form-select"
                id="customerCountry"
                name="country"
                value={customer.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="Ind">India</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-4 mb-5">
              <label htmlFor="customerState" className="form-label">State</label>
              <select
                className="form-select"
                id="customerState"
                name="state"
                value={customer.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="TS">Telangana</option>
                <option value="TN">Tamil Nadu</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={customer.city}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
            <div className="col-4">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input
                type="tel"
                className="form-control"
                id="pincode"
                name="pincode"
                value={customer.pincode}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Address;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchCustomerById, addPost, updateCustomer } from "../../../Redux/Action/auth";
import "../Viewcustomers/Table";
import {CountryDropDown,StateDropDown}  from "../DropDown/DropDown";

import "../../App.css";
import { FaAngleRight } from "react-icons/fa";

function CustomerForm() {
  const dispatch = useDispatch();
  const arrowRight = FaAngleRight();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    firstname: "",
    lastName: "",
    alternativephone: "",
    addline: "",
    addressline: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchCustomerById(id)).then((response) => {
        if (response.payload) {
          setCustomer(response.payload);
        }
      });
    }
  }, [dispatch, id]);

  const handleNavigation = () => {
    navigate("/table");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Update existing customer
      dispatch(updateCustomer(customer))
        .then(() => {
          console.log("Customer updated successfully");
          navigate("/table");
        })
        .catch((error) => {
          console.error("Error updating customer:", error);
        });
    } else {
      // Add new customer
      dispatch(addPost(customer))
        .then(() => {
          console.log("Customer added successfully");
          navigate("/table");
        })
        .catch((error) => {
          console.error("Error adding customer:", error);
        });
    }

    // Reset the customer state
    setCustomer({
      name: "",
      email: "",
      phone: "",
      firstname: "",
      lastName: "",
      alternativephone: "",
      addline: "",
      addressline: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
    });
  };
  const handleCountry = (selectedCountry) => {
    setCustomer({
        ...customer,
        country: selectedCountry
    });
  }
  const handleState = (selectedState) => {
    setCustomer({
        ...customer,
        state: selectedState
    });
};
  const { isViewMode, isUpdateMode } = location.state || {};
  console.log(isViewMode);

  return (
    <>
      {isViewMode && (
        <>
          <div className="container mt-5 ">
            <h6 style={{ cursor: "pointer" }} onClick={handleNavigation}>
              Customers {arrowRight} Overview of {customer.name}
            </h6>
            <div className="mt-3 " style={{ width: "200px" }}>
              <h5 style={{ borderBottom: "2px solid #FE7720" }}>
                General Details
              </h5>
            </div>
          </div>

          <div className="basic mt-4 d-flex">
            <img
              src={customer.image}
              alt="Logo"
              width="56"
              height="56"
              className="mb-3 mr-3"
              style={{ marginRight: "20px" }}
            />
            <div className="d-flex flex-column">
              <h5>{customer.name}</h5>
              <p> Customer id:{id}</p>
            </div>
          </div>
        </>
      )}
      {isUpdateMode && (
        <div className="container pt-5 ">
          <h6 style={{ cursor: "pointer" }} onClick={handleNavigation}>
            Customers {arrowRight} Edit Customer{" "}
          </h6>
        </div>
      )}

      {!isViewMode && !isUpdateMode && (
        <div className="container pt-5 ">
          <h6 style={{ cursor: "pointer" }}>
            Customers {arrowRight} Add Customer{" "}
          </h6>
        </div>
      )}
      <div className="basic">
        <h2 className="">Basic Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-4 mb-5">
                <label htmlFor="customerName" className="form-label">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  name="name"
                  disabled={isViewMode}
                  value={customer.name}
                  onChange={handleChange}
                  placeholder="Enter"
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="customerEmail" className="form-label">
                  Customer Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="customerEmail"
                  name="email"
                  value={customer.email}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="customerPhone" className="form-label">
                  Customer Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="customerPhone"
                  name="phone"
                  value={customer.phone}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/*  */}
      <div className="basic">
        <h2 className="mb-3">Address Details</h2>
        <form>
          <div className="container mt-3">
            <div className="row">
              <div className="col-4 mb-5">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={customer.firstname}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={customer.lastName}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="alternativephone" className="form-label">
                  Alternate Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="alternativephone"
                  name="alternativephone"
                  value={customer.alternativephone}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-4 mb-5">
                <label htmlFor="addline" className="form-label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addline"
                  name="addline"
                  value={customer.addline}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="addressline" className="form-label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressline"
                  name="addressline"
                  value={customer.addressline}
                  onChange={handleChange}
                  placeholder="Enter"
                  disabled={isViewMode}
                  required
                />
              </div>
              <div className="col-4">
                <CountryDropDown
                            value={customer.country ?? ''}
                            onChange={ handleCountry}
                            disabled={isViewMode}
                        />
              </div>
            </div>

            <div className="row">
              <div className="col-4 mb-5">
                <StateDropDown
                             country={customer.country}
                             value={customer.state}
                             onChange={handleState}
                             disabled={isViewMode}
                        />
              </div>
              <div className="col-4">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={customer.city}
                  disabled={isViewMode}
                  onChange={handleState}
                  placeholder="Enter"
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  disabled={isViewMode}
                  value={customer.pincode}
                  onChange={handleChange}
                  placeholder="Enter"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*  */}

      {!isViewMode && (
        <div className="main">
          <div
            className="footer p-3 d-flex justify-content-end "
            style={{ gap: 20 }}
          >
            <button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#FE7720",
                border: "1px solid #FE7720",
                borderRadius: "10px",
                width:"100px"
              }}
              onClick={handleNavigation}
            >
              Go Back
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#FE7720",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "10px",
                width:"100px"
              }}
              onClick={handleSubmit}
            >
              {isUpdateMode ? "Update" : "Save"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerForm;

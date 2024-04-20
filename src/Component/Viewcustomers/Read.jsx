import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCustomerById } from "../../Action/auth";
import Image from "../../assets/photo/image.svg"

function CustomerDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Local state to hold the customer details
  const [customer, setCustomer] = useState(null);
  const [isFetching, setIsFetching] = useState(false); // To track if data is being fetched

  // Fetch customer posts from Redux store
  const reduxCustomerPosts = useSelector((state) => state.customer?.posts);

  useEffect(() => {
    
    // Check if customer data is already available in Redux store
    if (Array.isArray(reduxCustomerPosts) && reduxCustomerPosts.length > 0) {
      const selectedCustomer = reduxCustomerPosts.find((c) => c.id === parseInt(id, 10));
      
      
      if (selectedCustomer) {
        setCustomer(selectedCustomer);
        setIsFetching(false);
        return; // Exit early if data is available
      }
    }

    if (!isFetching) {
      setIsFetching(true);
       dispatch(fetchCustomerById(id)).then((response) => {
          if (response.payload) {
            setCustomer(response.payload);
          }
       });
    }
  }, [dispatch, id, reduxCustomerPosts, isFetching]);

  if (!customer) {
    return <div>Loading... customer details are not available</div>;
  }

  return (
    <>

<div className="basic d-flex">
    <img src={Image} alt="Logo" className="mb-3 mr-3" style={{ marginRight: "20px" }} />
    <div className="d-flex flex-column">
        <h5>{customer.name}</h5>
        <p> customer id:{ id }</p>
    </div>
</div>
        <div className="basic">
        <h2 className="">Basic Details</h2>
        <form >
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
                  value={customer.name}
                  readOnly
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
                  readOnly
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
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
      </div>

    {/*  */}
    <div className="basic">
        <h2 className="mb-5">Address Details</h2>
        <form >
          <div className="container">
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
                  readOnly
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
                 readOnly
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
                 readOnly
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
                  readOnly
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
                  readOnly
                />
              </div>
              <div className="col-4">
                <label htmlFor="customerCountry" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="customerCountry"
                  name="country"
                  value={customer.country}
                  readOnly
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
                <label htmlFor="customerState" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="customerState"
                  name="state"
                  value={customer.state}
                  readOnly
                >
                  <option value="">Select State</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="TS">Telangana</option>
                  <option value="TN">Tamil Nadu</option>
                </select>
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
                  readOnly
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
                  value={customer.pincode}
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CustomerDetails;

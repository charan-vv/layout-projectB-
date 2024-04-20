import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCustomerById, updateCustomer } from "../../Action/auth";

function CustomerDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  const reduxCustomerPosts = useSelector((state) => state.customer?.posts);
  const selectedCustomer = useMemo(() => {
    return Array.isArray(reduxCustomerPosts)
      ? reduxCustomerPosts.find((c) => c.id === parseInt(id, 10))
      : null;
  }, [reduxCustomerPosts, id]);

  const [customer, setCustomer] = useState(selectedCustomer);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!customer && !isFetching) {
      setIsFetching(true);
      if (!selectedCustomer) {
        dispatch(fetchCustomerById(id)).then((response) => {
          if (response.payload) {
            setCustomer(response.payload);
          }
          setIsFetching(false);
        });
      } else {
        setCustomer(selectedCustomer);
        setIsFetching(false);
      }
    }
  }, [dispatch, id, selectedCustomer, customer, isFetching]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateCustomer(customer))
      .then(() => {
        // Handle success here, for example:
        
      })
      .catch((error) => {
        // Handle error here
        console.error("Error updating customer:", error);
      });
  };

  if (!customer) {
    return <div>Loading... customer details are not available</div>;
  }

  return (
    <>
      <div className="basic">
        <h2 className="">Basic Details</h2>
        <form>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/*  */}
      <div className="basic">
        <h2 className="mb-5">Address Details</h2>
        <form>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/*  */}
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
            }}
            onClick={() => {
              handleUpdate();
              handleNavigation();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
